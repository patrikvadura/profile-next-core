import React from 'react'
import ModalView from '@/app/components/Customizer/ModalView'
import { Input } from '@/app/ui/Input'
import { Radio } from '@/app/ui/Radio'
import DNSChecker from '@/app/components/Customizer/DNSChecker'
import Link from 'next/link'
import { useDomain } from '@/app/components/Customizer/DNSChecker/DomainContext'

interface Props {
  isModalVisible: boolean
  toggleModalVisibility: () => void
  other: any
  visibility: any
  availability: boolean | null
}

export default function SettingsDomain({
  isModalVisible,
  toggleModalVisibility,
  other,
  visibility,
  availability,
}: Props) {
  const { domain } = useDomain()

  return (
    <ModalView title="Doména" isVisible={isModalVisible} toggleVisibility={toggleModalVisibility}>
      <div className="flex flex-col space-y-4 pt-4">
        <h3 className="text-lg font-bold pt-4">
          Název vaší domény{' '}
          <span className="text-sm font-normal opacity-50">(ověřte dostupnost)</span>
        </h3>

        <DNSChecker />

        {availability !== null && (
          <fieldset id="dnsOption" className="pt-4 space-y-4">
            {availability ? (
              <div className="flex flex-col space-y-2">
                <Radio
                  id="dnsBuy"
                  name="dnsOption"
                  checked={visibility.selectedDnsOption === 'dnsBuy'}
                  onChange={() => {
                    visibility.setSelectedDnsOption('dnsBuy')
                    visibility.setShowDnsTransfer(true)
                    visibility.setShowDnsSelf(false)
                    visibility.setShowDnsHelp(false)
                  }}
                >
                  <div className="w-full flex flex-row justify-between items-center">
                    <span>Zakoupit doménu u VisioSnap</span>
                    <span className="text-sm font-normal opacity-50">250 Kč/rok</span>
                  </div>
                </Radio>

                {visibility.selectedDnsOption === 'dnsBuy' && (
                  <div className="ml-12 space-y-4">
                    <p className="text-black text-xs font-normal opacity-75">
                      Doménu za vás zakoupíme a vše zařídíme - již se nemusíte o nic víc starat.
                    </p>

                    <h3 className="pt-2 text-black font-semibold">Zadejte fakturační údaje</h3>

                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="text"
                        value={other.domainBuyName}
                        onChange={e => other.setDomainBuyName(e.target.value)}
                        label="Jméno a příjmení / firma"
                        classLabel="!text-black"
                      />

                      <Input
                        type="email"
                        value={other.domainBuyEmail}
                        onChange={e => other.setDomainBuyEmail(e.target.value)}
                        label="Emailová adresa"
                        classLabel="!text-black"
                      />

                      <Input
                        type="text"
                        value={other.domainBuyAddress}
                        onChange={e => other.setDomainBuyAddress(e.target.value)}
                        label="Adresa"
                        classLabel="!text-black"
                      />

                      <Input
                        type="text"
                        value={other.domainBuyVAT}
                        onChange={e => other.setDomainBuyVAT(e.target.value)}
                        label="IČO"
                        classLabel="!text-black"
                      />
                    </div>

                    <Radio
                      id="dnsBuyInfoAccept"
                      name="dnsBuyInfoAccept"
                      classLabel="!ml-0"
                      checked={visibility.selectedBuyInfoAccept === 'dnsBuyInfoAccept'}
                      onChange={() => {
                        visibility.setSelectedBuyInfoAccept('dnsBuyInfoAccept')
                        visibility.setSelectedBuyInfoAccepted(true)
                      }}
                    >
                      <span>Souhlasím s předáním osobních údajů</span>
                    </Radio>
                  </div>
                )}
              </div>
            ) : (
              <fieldset id="dnsOption" className="pt-4 space-y-4">
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="dnsTransfer"
                    className="ml-4 flex flex-row items-start font-semibold cursor-pointer"
                  >
                    <input
                      type="radio"
                      id="dnsTransfer"
                      name="dnsOption"
                      className="peer relative mr-3 appearance-none !size-5 border rounded-full border-gray-300 cursor-pointer checked:bg-[#72E790]"
                      checked={visibility.selectedDnsOption === 'dnsTransfer'}
                      onChange={() => {
                        visibility.setSelectedDnsOption('dnsTransfer')
                        visibility.setShowDnsTransfer(true)
                        visibility.setShowDnsSelf(false)
                        visibility.setShowDnsHelp(false)
                      }}
                    />
                    <div className="w-full flex flex-row justify-between items-center">
                      <span>Převedu doménu k VisioSnap</span>
                      <span className="text-sm font-normal opacity-50">250 Kč/rok</span>
                    </div>
                  </label>

                  {visibility.selectedDnsOption === 'dnsTransfer' && (
                    <div className="ml-12 space-y-4">
                      <Input
                        type="text"
                        value={other.dnsTransferCode}
                        onChange={e => other.setDnsTransferCode(e.target.value)}
                        label="Zadejte autorizační kód pro převod"
                        placeholder="XXXX-AAAA-BBBB-CCCC"
                        classLabel="!text-black"
                      />

                      <p className="text-black text-xs font-normal opacity-75">
                        Autorizační kód obsahuje 16 znaků. Kód můžete získat zde:{' '}
                        <Link
                          href="https://www.nic.cz/whois/send-password"
                          target="_blank"
                          className="underline"
                        >
                          www.nic.cz
                        </Link>
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="dnsSelf"
                    className="ml-4 flex flex-row items-start font-semibold cursor-pointer"
                  >
                    <input
                      type="radio"
                      id="dnsSelf"
                      name="dnsOption"
                      className="peer relative mr-3 appearance-none !size-5 border rounded-full border-gray-300 cursor-pointer checked:bg-[#72E790]"
                      checked={visibility.selectedDnsOption === 'dnsSelf'}
                      onChange={() => {
                        visibility.setSelectedDnsOption('dnsSelf')
                        visibility.setShowDnsTransfer(false)
                        visibility.setShowDnsSelf(true)
                        visibility.setShowDnsHelp(false)
                      }}
                    />
                    <div className="w-full flex flex-row justify-between items-center">
                      <span>Nastavím si sám DNS záznamy</span>
                      <span className="text-sm font-normal opacity-50">zdarma</span>
                    </div>
                  </label>

                  {visibility.selectedDnsOption === 'dnsSelf' && (
                    <div className="ml-12 space-y-4">
                      <p className="text-black text-sm font-normal opacity-75">
                        Následující DNS přiřaďte k vaší doméně:
                      </p>

                      <div className="bg-gray-50 p-4">
                        <p className="text-black text-sm font-normal opacity-50">
                          <table className="w-full">
                            <tr className="font-semibold">
                              <td>Doména</td>
                              <td>Typ</td>
                              <td>Hodnota</td>
                              <td>Priorita</td>
                              <td>TTL</td>
                            </tr>

                            <tr>
                              <td>{domain ? domain : 'vaše doména'}</td>
                              <td>A</td>
                              <td>76.76.21.21</td>
                              <td>0</td>
                              <td>600</td>
                            </tr>

                            <tr>
                              <td>www.{domain ? domain : 'vaše doména'}</td>
                              <td>CNAME</td>
                              <td>cname.vercel-dns.com</td>
                              <td>0</td>
                              <td>600</td>
                            </tr>
                          </table>
                        </p>
                      </div>

                      <p className="text-black text-xs font-normal opacity-75">
                        Kontrolu vašeho nastavení můžete provést zde:{' '}
                        <Link href="https://dnschecker.org" target="_blank" className="underline">
                          www.dnschecker.org
                        </Link>
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="dnsHelp"
                    className="ml-4 flex flex-row items-start font-semibold cursor-pointer"
                  >
                    <input
                      type="radio"
                      id="dnsHelp"
                      name="dnsOption"
                      className="peer relative mr-3 appearance-none !size-5 border rounded-full border-gray-300 cursor-pointer checked:bg-[#72E790]"
                      checked={visibility.selectedDnsOption === 'dnsHelp'}
                      onChange={() => {
                        visibility.setSelectedDnsOption('dnsHelp')
                        visibility.setShowDnsTransfer(false)
                        visibility.setShowDnsSelf(false)
                        visibility.setShowDnsHelp(true)
                      }}
                    />
                    <div className="w-full flex flex-row justify-between items-center">
                      <span>Potřebuji pomoci nastavit DNS záznamy</span>
                      <span className="text-sm font-normal opacity-50">500 Kč</span>
                    </div>
                  </label>
                </div>
              </fieldset>
            )}
          </fieldset>
        )}
      </div>
    </ModalView>
  )
}
