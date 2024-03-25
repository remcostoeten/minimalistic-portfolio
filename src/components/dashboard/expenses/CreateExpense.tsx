import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { FirebaseForm } from "./FirebaseForm"

export function CreateExpense() {
  const fields = [
    { name: "amount", type: "number", placeholder: "Amount" },
    { name: "description", type: "text", placeholder: "Description" },
    {
      name: "category",
      type: "select",
      options: [{ id: "categories", name: "Categories" }],
    },
  ]

  return <FirebaseForm fields={fields} collectionName="expenses" />
}
