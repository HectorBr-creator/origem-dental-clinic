# PRD — Origem Dental Clinic (Landing Page)

## Problema Original
Landing page premium para a Origem Dental Clinic (Braga). Não um site típico de dentista, mas uma experiência digital que transmite serenidade, confiança, exclusividade, elegância, cuidado humano e tecnologia discreta. Inspiração: clínicas privadas de luxo, spas premium, hotéis boutique, arquitetura minimalista. Paleta: verde #214A3B, branco #FFFFFF, preto suave #1A1A1A, prata #C7C7C7.

## User Choices
- Fotos reais da clínica (placeholders premium por agora, a substituir)
- Idioma: Português (Portugal)
- Botão CTA → formulário de agendamento funcional que envia dados
- Dados de contacto reais (placeholders por agora)
- Tipografia à escolha → Cormorant Garamond (títulos) + Outfit (corpo)

## Personas
- Paciente que procura uma clínica dentária premium, calma e humana em Braga.

## Arquitetura
- Frontend: React 19 + Tailwind + framer-motion + Lenis (smooth scroll). Componentes por secção em `src/components/sections/`.
- Backend: FastAPI + MongoDB (motor). Endpoints `/api/appointments` (POST/GET) com modelo PyObjectId.
- Conteúdo centralizado em `src/data/content.js`.

## Implementado (2026-07-04)
- Navbar sticky glassmorphism + navegação suave e menu mobile.
- Hero full-screen com parallax e headline/subheadline do briefing + 2 CTAs.
- Secção Atmosfera (grid editorial de imagens + 4 pilares).
- Secção Filosofia (verde profundo, foto + texto lado a lado).
- Tratamentos (4 cartões premium com hover-reveal).
- Jornada do Paciente (5 passos, timeline minimalista).
- Depoimentos rotativos (sem caixas pesadas, sem estrelas).
- Chamada Final emocional + formulário de agendamento funcional (persiste em MongoDB).
- Rodapé limpo (telefone, WhatsApp, morada, redes sociais).
- Testado: Frontend 100% (10/10 fluxos), Backend 100% após correção `id`.

## Backlog / Próximos passos
- P0: Substituir imagens placeholder por fotos reais da clínica.
- P0: Inserir dados de contacto reais (telefone, WhatsApp, morada, redes, email).
- P1: Notificação por email dos agendamentos (ex.: Resend/SendGrid).
- P1: Painel admin para ver agendamentos.
- P2: Versão SEO/meta tags, favicon e logotipo real.
