import { Link2, Plus } from "lucide-react"
import { Button } from "../../components/button"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../lib/axios"

interface LinksProps {
  title: string
  url: string
}

export function ImportantLinks() {
  const { tripId } = useParams()
  const [links, setLinks] = useState<LinksProps[]>([])

  useEffect(() => {
    api
      .get(`/trips/${tripId}/links`)
      .then((response) => setLinks(response.data.links))
  }, [tripId])

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl text-lime-400">Links importantes</h2>
      <div className="space-y-5">
        {links.length > 0 ? (
          <div>
            {links.map((link) => {
              return (
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <span className="block font-medium text-zinc-100">
                      {link.title}
                    </span>
                    <a
                      href="#"
                      className="block font-xs text-zinc-400 truncate hover:text-zinc-200"
                    >
                      {link.url}
                    </a>
                  </div>
                  <Link2 className="text-zinc-400 size-5 shrink-0" />
                </div>
              )
            })}
          </div>
        ) : (
          <p className="text-zinc-500 text-sm">
            Nenhuma link importante cadastrado.
          </p>
        )}
      </div>
      <Button variant="secondary" size="full">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  )
}
