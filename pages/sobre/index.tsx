/* eslint-disable @next/next/no-img-element */
import { Head } from "@components/config";
import { Container } from "@components/layouts";
import { Button, Heading, Text } from "@components/widgets";
import { NextPage } from "next";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <>
      <Head title="INOVA | Sobre" />

      <Container asChild>
        <main className="min-h-[492px] py-14 flex flex-col justify-center">
          <Heading className="mb-6 text-secondary-500">Sobre a INOVA</Heading>

          <div className="flex flex-col gap-5">
            <Text asChild>
              <p>
                Aqui na INOVA Alpim atuamos nas áreas de Trabalho em Altura,
                Elétrica, Para- raios, Limpeza de Fachada, Limpeza de Vidros,
                Vedação, Calafetação e pintura.
              </p>
            </Text>

            <Text asChild>
              <p>
                Buscamos sempre uma solução completa para nossos clientes, com
                qualidade e seriedade. Para que nossos clientes tenham a
                tranquilidade de estarem acompanhados por profissionais
                atualizados e que amam seu propósito de trabalhar na INOVA.
              </p>
            </Text>

            <Text asChild>
              <p>
                Juntos tornamos nosso mundo mais verde e saudável, e nossa vida
                mais segura e saudável.
              </p>
            </Text>
          </div>
        </main>
      </Container>

      <Container asChild>
        <section className="min-h-[605px] lg:min-h-[800px] flex flex-col justify-center items-center bg-primary-500">
          <div className="mb-20 lg:mb-24 flex flex-col lg:flex-row lg:items-center lg:gap-36">
            <Heading className="mb-6 lg:mb-0 text-center">
              Trabalhos realizados
            </Heading>

            <Text className="text-center">
              Veja os trabalhos realizados pela INOVA.
            </Text>
          </div>

          <img
            src="/images/example-about-img.png"
            alt="example image"
            className="lg:w-[300px]"
          />
        </section>
      </Container>

      <Container asChild>
        <section className="pt-24 flex flex-col items-center">
          <Heading className="mb-6 lg:mb-12 text-secondary-500 text-center">
            Veja mais sobre os trabalhos da inova
          </Heading>

          <Text asChild>
            <p className="mb-12 lg:mb-36 text-center">
              Através de seu Instagram a INOVA está sempre em contato
              compartilhando os trabalhos realizados, soluções e novidades
              dentro da empresa.
            </p>
          </Text>

          <div className="w-full mb-6 px-4 py-7 bg-primary-500">
            <Text asChild>
              <h3 className="mb-4 text-sm lg:text-sm uppercase">
                Acompanhe nossos trabalhos de perto
              </h3>
            </Text>

            <Text>
              Veja os processos de nossos trabalhos, inovações e projeção no
              mercado.
            </Text>
          </div>

          <div className="w-full mb-12 px-4 py-7 bg-primary-500">
            <Text asChild>
              <h3 className="mb-4 text-sm lg:text-sm uppercase">
                Compreenda mais sobre nossas soluções através de nossos
                conteúdos.
              </h3>
            </Text>

            <Text>
              Produção de conteúdo apresentando e destrinchando nossas soluções
              em meio aos problemas de nossos clientes.
            </Text>
          </div>

          <Button asChild>
            <a href="https://www.instagram.com/inovaalpin">Instagram INOVA</a>
          </Button>
        </section>
      </Container>

      <Container asChild>
        <section className="min-h-[566px] lg:min-h-[992px] flex flex-col justify-center items-center">
          <Heading className="mb-6 text-center text-secondary-500">
            Vamos trabalhar em novas soluções?
          </Heading>

          <Text asChild>
            <p className="mb-12 text-center">
              Entre em contato para iniciar um serviço, estamos ansiosos para
              inovar através de soluções para sua empresa.
            </p>
          </Text>

          <img
            src="/images/example-banner.png"
            alt="banner - exemplo de serviço"
            className="w-full h-[292px] mb-12 hidden lg:block object-cover"
          />

          <Button asChild>
            <Link href="/orcamento">Solicitar orçamento</Link>
          </Button>
        </section>
      </Container>
    </>
  );
};

export default About;