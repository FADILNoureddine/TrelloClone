import Module from "module"

interface Board{
    columns: Map<TypedColumn, column> 
}

type TypedColumn = "todo" | "inprogress" | "done"

interface Column{
    id: TypedColumn,
    todos: Todo[]
}

interface Todo extends Module.document{
    $id: string
    $createdAt: string
    title: string
    status: TypedColumn
    image?: Image
}

interface Image{
    bucketId: string
    fileId: string
}