"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Editor } from "@monaco-editor/react"
import { CopyIcon, CounterClockwiseClockIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

import { AppContext } from "./AppContext"
import { MaxLengthSelector } from "./components/maxlength-selector"
import ModelSelector from "./components/model-selector"
import PropsEditor from "./components/props-editor"
import { models, types } from "./data/models"

export default function PlaygroundPage() {
  const [code, setCode] = useState<string | undefined>("// Enter HTML here")
  const [jsx, setJSX] = useState<string>("")
  const editorRef = useRef<any | null>(null)
  const [isTypescript, setIsTypescript] = useState(false)
  const [componentName, setComponentName] = useState<string>("ComponentName")
  const [showNotification, setShowNotification] = useState<boolean>(false)
  const [isClientComponent, setIsClientComponent] = useState<boolean>(false)
  const [wrapInFunctionComponent, setWrapInFunctionComponent] = useState(false)
  const [propsInput, setPropsInput] = useState("")
  const [typeOrInterface, setTypeOrInterface] = useState(false)
  const [optional, setOptional] = useState(true)
  const [propsArray, setPropsArray] = useState<
    Array<{ name: string; type: string }>
  >([{ name: "", type: "" }])

  useEffect(() => {
    const editorInstance = editorRef.current
    const body = document.body
    let timeoutId: NodeJS.Timeout

    const cleanup = () => {
      body.classList.remove("html-to-jsx")
      clearTimeout(timeoutId)
    }

    const handleRouteChange = () => {
      cleanup()
    }

    body.classList.add("html-to-jsx")
    timeoutId = setTimeout(() => {
      editorInstance?.getAction("editor.action.formatDocument")?.run()
    }, 1000)

    // Listen for route changes
    window.addEventListener("popstate", handleRouteChange)

    // Cleanup on unmount
    return () => {
      cleanup()
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [])

  function convertHtmlToJSX(html: string): string {
    let jsx = html.replace(/\bclass=/g, "className=")
    jsx = jsx.replace(/\bfor=/g, "htmlFor=")

    jsx = jsx.replace(/\bon([a-z]+)/g, function (match: any, group: string) {
      return "on" + group.charAt(0).toUpperCase() + group.slice(1)
    })

    jsx = jsx.replace(/=(\w+)/g, function (match: any, group: string) {
      return `="${group}"`
    })

    jsx = jsx.replace(/style="([^"]*)"/g, function (match: any, group: string) {
      let style = group.split(";").reduce(function (style, rule) {
        let parts = rule.split(":")
        if (parts[1]) {
          let key = parts[0].trim()
          let value = parts[1].trim()
          if (!isNaN(value as any)) {
            value = parseInt(value).toString()
          } else if (value !== "true" && value !== "false") {
            value = `${value}`
          }
          key = key.replace(/-./g, function (x) {
            return x[1].toUpperCase()
          })
          style += key + ": " + value + ", "
        }
        return style
      }, "")
      return `style={{${style}}}`
    })
    const booleanAttributes = [
      "checked",
      "selected",
      "disabled",
      "readOnly",
      "multiple",
      "hidden",
    ]
    booleanAttributes.forEach((attr) => {
      const re = new RegExp(
        `<([a-zA-Z][a-zA-Z0-9]*)\\b[^>]*?\\b${attr}(?![^>]*?>)`,
        "g"
      )
      jsx = jsx.replace(re, `<$1 ${attr}={true}`)
    })

    const selfClosingTags = ["br", "hr", "img", "input", "link", "meta"]
    selfClosingTags.forEach((tag) => {
      const re = new RegExp(`<${tag}\\b([^>]*)(?<!/)>`, "g")
      jsx = jsx.replace(re, `<${tag}$1 />`)
    })

    jsx = jsx.replace(
      /<!--([\s\S]*?)-->/g,
      function (match: any, group: string) {
        const lines = group.split("\n")
        return lines.map((line) => `{/*${line.trim()}*/}`).join("\n")
      }
    )

    jsx = jsx.replace(
      /<(svg|path|circle|rect|line|polyline|polygon|text|g|defs|use|mask)[^>]*>/g,
      function (match: any) {
        return match.replace(/-([a-z])/g, function (match: any, group: string) {
          return group.toUpperCase()
        })
      }
    )

    if (isClientComponent) {
      jsx = jsx.replace(/&amp;/g, "is client")
    }

    return jsx
  }

  const handleCopy = useCallback(() => {
    navigator.clipboard
      .writeText(jsx)
      .then(() => {
        console.log("Copying to clipboard was successful!")
        setShowNotification(true)
        setTimeout(() => setShowNotification(false), 5000)
      })
      .catch((err) => {
        console.error("Could not copy text: ", err)
      })
  }, [jsx])

  function handleEditorChange(value: string | undefined) {
    if (value !== undefined) {
      setCode(value)
      let jsxCode = convertHtmlToJSX(value)

      const clientPrefix = isClientComponent ? "'use client';\n" : ""

      const trimmedPropsArray = propsArray.map((prop) => ({
        name: prop.name.trim(),
        type: prop.type.trim(),
      }))
      const hasProps = trimmedPropsArray.some(
        (prop) => prop.name.length > 0 || prop.type.length > 0
      )
      let renderedJSX

      const propsString = trimmedPropsArray
        .map((prop) => `${prop.name}: ${prop.type}`)
        .join(", ")

      const propsType = hasProps ? `type<${componentName}Props>` : ""
      const funcProps = hasProps ? ` ${propsString} ` : ""
      if (wrapInFunctionComponent) {
        if (isTypescript && hasProps) {
          const interfaceProps = `
    ${componentName}Props {
        ${funcProps}
    }`

          renderedJSX = `
    ${clientPrefix}
    ${interfaceProps}

    const ${componentName}: React.FC${propsType} = (${propsString}) => {
        return (<>\n${jsxCode}\n</>);
    };

    export default ${componentName};
    `
        } else {
          renderedJSX = `
    ${clientPrefix}

    export default function ${componentName} (${
      hasProps ? `{${propsString}}` : ""
    }) {
        return (<>\n${jsxCode}\n</>);
    };
    `
        }
      } else {
        renderedJSX = jsxCode
      }

      setJSX(renderedJSX)

      if (jsxCode.length > 0) {
        useEffect(() => {
          document.body.classList.add("isTyping")
          const timeout = setTimeout(() => {
            document.body.classList.remove("isTyping")
          }, 1000)
          return () => clearTimeout(timeout)
        }, [jsxCode])
      }
    }
  }

  function handlePropChange(
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    propKey: "name" | "type"
  ) {
    const updatedProps = [...propsArray]
    updatedProps[index] = {
      ...updatedProps[index],
      [propKey]: event.target.value,
    }
    setPropsArray(updatedProps)
  }

  function addNewProp() {
    setPropsArray([...propsArray, { name: "", type: "" }])
  }

  function removeProp(index: number) {
    const updatedProps = [...propsArray]
    updatedProps.splice(index, 1)
    setPropsArray(updatedProps)
  }

  function isOptional() {
    setOptional(!optional)
  }

  return (
    <>
      <AppContext.Provider
        value={{
          isTypescript,
          setIsTypescript,
          componentName,
          setComponentName,
          showNotification,
          setShowNotification,
          isClientComponent,
          setIsClientComponent,
          wrapInFunctionComponent,
          setWrapInFunctionComponent,
          typeOrInterface,
          setTypeOrInterface,
        }}
      >
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 155,
            delay: 0.47,
          }}
          className="overflow-hidden black-block black-block--section shadow"
        >
          <div className="flex-col hidden h-full md:flex ">
            <div className=" relative mb-1.5 mt-8 flex items-start justify-between space-y-2 pb-4 pl-4 pt-4 sm:flex-row sm:items-end sm:space-y-0.5 md:h-16">
              <div className="flex flex-col gap-2 w-min">
                <Label className="translate-x-2.5">
                  What is the component name?
                </Label>
                <Input
                  type="text"
                  className="note-border placeholder:text-red-400] jsx-input w-[auto]"
                  onChange={(e) => setComponentName(e.target.value)}
                  placeholder="Enter Component name)"
                />
              </div>

              <PropsEditor
                propsArray={propsArray}
                handlePropChange={handlePropChange}
                addNewProp={addNewProp}
                removeProp={removeProp}
                isOptional={isOptional}
              />

              <div className="flex w-full ml-auto space-x-2 sm:justify-end"></div>
            </div>
            <Tabs defaultValue="insert" className="flex-1">
              <div className="h-full py-6 ">
                <div className="grid h-full w-full items-stretch gap-6 pr-8 md:grid-cols-[1fr_200px]">
                  <div className="flex-col hidden space-y-4 sm:flex md:order-2">
                    <ModelSelector types={types} models={models} />
                    <MaxLengthSelector defaultValue={[256]} />
                  </div>
                  <div className="md:order-1">
                    <TabsContent value="complete" className="p-0 mt-0 border-0">
                      <div className="flex flex-col h-full space-y-4">
                        <button
                          onClick={handleCopy}
                          className="absolute top-0 right-0 z-50 p-2 border rounded-md border-zinc-700 bg-zinc-900"
                        >
                          <CopyIcon />
                        </button>
                        <motion.div
                          initial={{
                            opacity: 0,
                            scale: 0.9,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{
                            damping: 15,
                            delay: 1,
                          }}
                        >
                          <Editor
                            height="60vh"
                            defaultLanguage="javascript"
                            defaultValue={code}
                            className="rounded-full"
                            options={{
                              formatOnPaste: true,
                              formatOnType: true,
                              wordWrap: "on",
                              renderValidationDecorations: "off",
                              minimap: {
                                enabled: false,
                              },
                              lineNumbers: "off",
                              lineDecorationsWidth: 12,
                              suggest: {
                                showFiles: false,
                              },
                            }}
                            onChange={handleEditorChange}
                          />
                        </motion.div>
                        <div className="flex items-center space-x-2">
                          <Button>Submit</Button>
                          <Button variant="secondary">
                            <span className="sr-only">Show history</span>
                            <CounterClockwiseClockIcon className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="insert" className="p-0 mt-0 border-0">
                      <div className="flex flex-col space-y-4">
                        <motion.div
                          initial={{
                            opacity: 0,
                            x: 20,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{
                            damping: 15,
                            delay: 1,
                          }}
                          className="grid h-full grid-rows-2 gap-6 lg:grid-cols-2 lg:grid-rows-1"
                        >
                          <Editor
                            height="60vh"
                            defaultLanguage="javascript"
                            defaultValue={code}
                            className="rounded-full"
                            options={{
                              formatOnPaste: true,
                              formatOnType: true,
                              wordWrap: "on",
                              renderValidationDecorations: "off",
                              minimap: {
                                enabled: false,
                              },
                              lineNumbers: "off",
                              lineDecorationsWidth: 12,
                              suggest: {
                                showFiles: false,
                              },
                            }}
                            onChange={handleEditorChange}
                          />
                          <motion.div
                            initial={{
                              opacity: 0,
                              x: 20,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            exit={{
                              opacity: 0,
                              y: 10,
                            }}
                            transition={{
                              damping: 15,
                              delay: 1,
                            }}
                            className="relative"
                          >
                            <button
                              onClick={handleCopy}
                              className="absolute top-0 right-0 z-50 p-2 border rounded-md border-zinc-700 bg-zinc-900"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-white"
                                fill="#fff"
                                viewBox="0 0 256 256"
                              >
                                <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
                              </svg>
                            </button>
                            <Editor
                              height="60vh"
                              defaultLanguage="javascript"
                              value={jsx}
                              options={{
                                formatOnPaste: true,
                                formatOnType: true,
                                wordWrap: "on",
                                renderValidationDecorations: "off",
                                minimap: {
                                  enabled: false,
                                },
                                lineNumbers: "off",
                                lineNumbersMinChars: 3,
                                lineDecorationsWidth: 12,
                                suggest: {
                                  showFiles: false,
                                },
                              }}
                              theme="vs-dark"
                            />
                          </motion.div>
                        </motion.div>
                        <div className="flex items-center space-x-2">
                          <Button>Submit</Button>
                          <Button variant="secondary">
                            <span className="sr-only">Show history</span>
                            <CounterClockwiseClockIcon className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="edit" className="p-0 mt-0 border-0">
                      <div className="flex flex-col space-y-4">
                        <div className="grid h-full gap-6 lg:grid-cols-2">
                          <div className="flex flex-col space-y-4">
                            <div className="flex flex-col flex-1 space-y-2">
                              <Label htmlFor="input">Input</Label>
                              <Textarea
                                id="input"
                                placeholder="We is going to the market."
                                className="flex-1 lg:min-h-[580px]"
                              />
                            </div>
                            <div className="flex flex-col space-y-2">
                              <Label htmlFor="instructions">Instructions</Label>
                              <Textarea
                                id="instructions"
                                placeholder="Fix the grammar."
                              />
                            </div>
                          </div>
                          <div className="min-h-[400px] rounded-md border bg-muted lg:min-h-[700px]" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button>Submit</Button>
                          <Button variant="secondary">
                            <span className="sr-only">Show history</span>
                            <CounterClockwiseClockIcon className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  </div>
                </div>
              </div>
            </Tabs>
          </div>
        </motion.div>
      </AppContext.Provider>
    </>
  )
}
