import { Link2, Tag, X } from "lucide-react"
import { Button } from "../../components/button"
import { FormEvent } from "react"
import { api } from "../../lib/axios"
import { useNavigate, useParams } from "react-router-dom"

interface CreateLinkModalProps {
  closeLinkModal: () => void  
}

export function CreateLinkModal({ closeLinkModal }: CreateLinkModalProps) {
  const { tripId } = useParams()
  const navigate = useNavigate()

  async function createLinks(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()   

    const data = new FormData(event.currentTarget)

    const title = data.get("title")?.toString()
    const url = data.get("url")?.toString()

    if (!title) {
      return
    }

    if (!url) {
      return
    }
    console.log(typeof url)
    await api.post(`/trips/${tripId}/links`, {
      title,
      url
    })

    navigate(0)
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl px-6 py-5 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar link</h2>
            <button type="button" onClick={closeLinkModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar os links importantes.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <form onSubmit={createLinks} className="space-y-3">
          <div className="flex items-center gap-2 h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg">
            <Tag className="text-zinc-400 size-5" />
            <input
              type="text"
              name="title"
              placeholder="Título do link"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <div className="flex flex-1 items-center gap-2 h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg">
            <Link2 className="text-zinc-400 size-5" />
            <input
              type="url"
              name="url"
              placeholder="URL"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <Button variant="primary" size="full" type="submit">
            Salvar link
          </Button>
        </form>
      </div>
    </div>
  )
}
