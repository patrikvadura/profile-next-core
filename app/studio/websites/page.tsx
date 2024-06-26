'use client'
import React, { useEffect, useState } from 'react'
import data from '@/app/lib/dataCustomizer.json'
import { DomainProvider } from '@/app/components/Customizer/DNSChecker/DomainContext'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react'
import { Icon } from '@iconify/react'
import { Input } from '@/app/ui/Input'

interface Document {
  _id: string
  domain: string
  createdAt: string
  selectedDnsOption: string
  status: string
  payments: boolean
}

export default function StudioWebsites() {
  const pageData = data.websites

  const [documents, setDocuments] = useState<Document[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState('info@patrikvadura.cz')

  useEffect(() => {
    const fetchData = async (email: string) => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/getDataByEmail?contactEmail=${email}`)
        const result = await response.json()

        if (result.success) {
          setDocuments(result.data)
        } else {
          setError(result.message)
        }
      } catch (error) {
        setError('Error fetching data')
      } finally {
        setLoading(false)
      }
    }

    fetchData(email)
  }, [email])

  return (
    <DomainProvider>
      <div className="container mt-auto mx-auto h-[85vh] px-8 py-12 bg-white rounded-tl-3xl rounded-tr-3xl flex flex-col space-y-8 overflow-hidden mb-0">
        <div className="flex flex-row justify-between items-center space-x-8">
          <h2 className="text-primary text-3xl font-bold">{pageData.title}</h2>

          <div className="flex flex-col space-y-4">
            <Input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Zadejte email"
            />

            {error && <p className="text-xs text-red-500">{error}</p>}
          </div>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : !error ? (
          <Table removeWrapper aria-label="Přehled vašich webových stránek">
            <TableHeader>
              <TableColumn>Doména</TableColumn>
              <TableColumn>Vytvořeno</TableColumn>
              <TableColumn>Typ DNS</TableColumn>
              <TableColumn>Status</TableColumn>
              <TableColumn>Platby</TableColumn>
            </TableHeader>

            <TableBody>
              {documents.map(doc => (
                <TableRow key={doc._id}>
                  <TableCell>{doc.domain}</TableCell>
                  <TableCell>{new Date(doc.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell>
                    {doc.selectedDnsOption === 'dnsTransfer'
                      ? 'Převod DNS k VisionSnap'
                      : doc.selectedDnsOption === ''
                      ? ''
                      : ''}
                  </TableCell>
                  <TableCell>
                    <span className="py-1 px-2 rounded-full font-semibold text-primary bg-secondary">
                      {doc.status || 'Publikováno'}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Icon
                      icon="material-symbols:check-rounded"
                      className="text-xl text-secondary"
                    ></Icon>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="flex flex-col justify-center items-center w-full h-full">
            Žádné weby nenalezeny
          </div>
        )}
      </div>
    </DomainProvider>
  )
}
