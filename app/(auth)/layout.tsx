'use client';

import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { usePathname } from "next/navigation";



export default function authLayout({ }) {
  const pathname = usePathname();

  return (
    <body className=' pb-20 min-h-screen flex'>

      <Tabs aria-label="Options" selectedKey={pathname}>
        <Tab key="signin" title="signin" href="/signin">
          <Card>
            <CardBody>

            </CardBody>
          </Card>
        </Tab>
        <Tab key="signup" title="Music" href="/signup">
          <Card>
            <CardBody>

            </CardBody>
          </Card>
        </Tab>
        <Tab key="videos" title="Videos" href="/videos">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </body>
  )
}

