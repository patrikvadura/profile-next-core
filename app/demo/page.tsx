import classes from '@/app/components/Contact/Form/index.module.scss'
import {
  Button,
  Input,
  Switch,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react'
import React from 'react'

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="flex flex-col md:flex-row w-full mt-32">
          <div className="basis-full max-w-screen-md mx-auto">
            <h1 className="text-5xl font-bold text-center py-12">
              Vytvořme společně zadání pro vaši webovou vizitku
            </h1>

            <form className={`${classes.main} space-y-6`}>
              <div className={classes.columns}>
                <Input
                  type="text"
                  label="Vaše jméno / Firma"
                  labelPlacement="outside"
                  variant="underlined"
                  classNames={{
                    input: classes.inputInput,
                  }}
                />

                <Input
                  type="email"
                  label="Emailová adresa"
                  labelPlacement="outside"
                  variant="underlined"
                  classNames={{
                    input: classes.inputInput,
                  }}
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-lg font-bold mb-4">Jaké sekce požadujete?</h3>

                <Switch
                  defaultSelected
                  aria-label="Chci zobrazit sekci Služby"
                  classNames={{ label: 'text-[14px] text-opacity-70' }}
                >
                  Chci zobrazit sekci
                  <Popover placement="bottom" showArrow={true}>
                    <PopoverTrigger>
                      <Button
                        variant="solid"
                        className="bg-transparent text-primary font-semibold p-0 ml-1 min-w-0"
                      >
                        Služby
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="px-1 py-2">
                        <div className="text-primary text-small font-bold">Sekce služeb</div>
                        <div className="text-tiny max-w-48 text-black text-opacity-70">
                          Zobrazuje přehledně vaše služby v několika sloupcích. Lze zvolit vlastní
                          ikonku, nadpis, popisek, případně odrážkový seznam.
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </Switch>

                <Switch
                  defaultSelected
                  aria-label="Chci zobrazit sekci Služby"
                  classNames={{ label: 'text-[14px] text-opacity-70' }}
                >
                  Chci zobrazit sekci
                  <Popover placement="bottom" showArrow={true}>
                    <PopoverTrigger>
                      <Button
                        variant="solid"
                        className="bg-transparent text-primary font-semibold p-0 ml-1 min-w-0"
                      >
                        Služby
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="px-1 py-2">
                        <div className="text-primary text-small font-bold">Sekce služeb</div>
                        <div className="text-tiny max-w-48 text-black text-opacity-70">
                          Zobrazuje přehledně vaše služby v několika sloupcích. Lze zvolit vlastní
                          ikonku, nadpis, popisek, případně odrážkový seznam.
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </Switch>
              </div>

              <Textarea
                name=""
                variant="underlined"
                placeholder="Poznámky"
                classNames={{
                  mainWrapper: 'col-span-12 md:col-span-6',
                  label: '',
                  input: 'p-2',
                }}
              />

              <Button type="submit" size="lg" radius="none" className={classes.submit}>
                Odeslat zadání
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
