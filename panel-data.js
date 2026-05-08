/* AUTO-GERADO — NÃO EDITAR MANUALMENTE */
/* Atualizado em: 08/05/2026, 11:54:12 */
window.__PANEL_STATE = {
  "version": "1.0",
  "settings": {
    "dailyGoalMin": 180
  },
  "activeSession": null,
  "daySessions": [
    {
      "id": "1778186992011",
      "person": "cristiano",
      "date": "2026-05-07",
      "startTime": "2026-05-07T20:49:52.012Z",
      "description": "Implementando rastreamento automático de sessões do Cristiano no painel de tarefas",
      "notes": "CLAUDE.md criado, scripts/session.mjs implementado, panel-data.js ativado no HTML, rastreamento automático operacional",
      "min": 1,
      "status": "done",
      "endTime": "2026-05-07T20:49:58.320Z"
    },
    {
      "id": "1778187307049",
      "person": "cristiano",
      "date": "2026-05-07",
      "startTime": "2026-05-07T20:55:07.050Z",
      "description": "Implementando views Log de Execuções e Sessões Cristiano no painel de tarefas",
      "notes": "Views 'Log de Execuções' e 'Sessões Cristiano' implementadas no painel: renderLogView(), renderSessionsView(), contadores nav nc-log/nc-sessions, seletor de tarefa no modal manual, corrigido sidebar duplicado",
      "min": 2,
      "status": "done",
      "endTime": "2026-05-07T20:57:13.989Z"
    },
    {
      "id": "1778187589348",
      "person": "cristiano",
      "date": "2026-05-07",
      "startTime": "2026-05-07T20:59:49.348Z",
      "description": "Análise da aba de Contatos do Radiant CRM",
      "notes": "Análise completa do módulo de Contatos: 10 pontos mapeados, 2 memos gerados (Reuber e Gustavo), fluxo de decisões criado em docs/decisoes/",
      "min": 30,
      "status": "done",
      "endTime": "2026-05-07T21:29:26.361Z"
    },
    {
      "id": "1778251772588",
      "person": "cristiano",
      "date": "2026-05-08",
      "startTime": "2026-05-08T14:49:32.595Z",
      "description": "Início de sessão de trabalho — revisão geral do projeto e definição de próximos passos",
      "notes": "Sessão de início de projeto: leitura de contexto, bootstrap de memória e mapeamento do backlog (16 tarefas abertas)",
      "min": 5,
      "status": "done",
      "endTime": "2026-05-08T14:54:12.862Z"
    }
  ],
  "tasks": [
    {
      "id": "A1",
      "group": "A",
      "title": "Troca de Senha (Settings)",
      "desc": "Implementar handler de troca de senha na página Settings. Os três campos HTML (senha atual, nova senha, confirmar) já existem visualmente mas sem nenhuma lógica de chamada à API. Criar endpoint PATCH /api/crm/me/password no backend e conectar ao botão Salvar.",
      "responsible": [
        "reuber"
      ],
      "validator": null,
      "status": "pending",
      "priority": "high",
      "estMin": 240,
      "logs": []
    },
    {
      "id": "A2",
      "group": "A",
      "title": "Analytics — KPIs/KPOs e Dados Reais",
      "desc": "Duas frentes em paralelo: (1) CRISTIANO — definir quais dados, KPIs e KPOs devem ser monitorados: indicadores de pipeline, conversão, ciclo de venda, performance de SDR, saúde de contratos e customer success. Entregar mapeamento completo dos indicadores com fórmulas e fontes. (2) REUBER — substituir dados hardcoded ('Retenção' 88, 'Satisfação' 85, heatmap) pela API real. Criar endpoints específicos conforme mapeamento do Cristiano. Dados de funil, receita e velocity já estão corretos.",
      "responsible": [
        "cristiano",
        "reuber"
      ],
      "validator": null,
      "status": "pending",
      "priority": "medium",
      "estMin": 720,
      "logs": []
    },
    {
      "id": "A3",
      "group": "A",
      "title": "SalesOrder — Fase 6: Reserva de Equipamento",
      "desc": "Bloco 'Reserva de equipamento' na página SalesOrderDetail está marcado como placeholder no código. Implementar UI de reserva/alocação de equipamento vinculada à OS.",
      "responsible": [
        "reuber"
      ],
      "validator": "cristiano",
      "status": "pending",
      "priority": "high",
      "estMin": 720,
      "logs": []
    },
    {
      "id": "A4",
      "group": "A",
      "title": "SalesOrder — Fase 7: Documentos",
      "desc": "Bloco de Documentos na tela de detalhe do Pedido de Venda está como placeholder. Implementar upload, listagem e validação de documentos obrigatórios por tipo de pedido.",
      "responsible": [
        "reuber"
      ],
      "validator": "cristiano",
      "status": "pending",
      "priority": "high",
      "estMin": 480,
      "logs": []
    },
    {
      "id": "A5",
      "group": "A",
      "title": "Customer Success — Fluxo, Processos e Funcionalidades",
      "desc": "Três frentes integradas: (1) CRISTIANO — criar o fluxo completo de CS: jornada do cliente pós-venda, etapas de onboarding, check-ins periódicos, critérios de saúde, definição de alertas de churn e régua de comunicação. (2) CRISTIANO — definir quais funcionalidades do CRM serão utilizadas pelo colaborador de CS no dia a dia. (3) REUBER — implantar as funcionalidades definidas, enriquecer a tela CustomerSuccess e validar integrações com backend customer-health já existente.",
      "responsible": [
        "cristiano",
        "reuber"
      ],
      "validator": "cristiano",
      "status": "pending",
      "priority": "medium",
      "estMin": 1200,
      "logs": []
    },
    {
      "id": "A6",
      "group": "A",
      "title": "Comissões — Plano, Mapeamento e Implantação",
      "desc": "Três frentes sequenciais: (1) CRISTIANO — elaborar e apresentar o plano de comissionamento: estrutura de percentuais por produto/perfil, regras de split, gatilhos de pagamento, período de apuração e casos especiais. Mapear todos os campos necessários no CRM para atender ao fluxo e ao cálculo das comissões. (2) GUSTAVO — validar o plano de comissionamento apresentado pelo Cristiano antes de qualquer implantação. (3) REUBER — após validação do Gustavo, implementar o módulo completo e validar o fluxo de dados com o ERP (OMIE).",
      "responsible": [
        "cristiano",
        "reuber"
      ],
      "validator": "gustavo",
      "status": "pending",
      "priority": "medium",
      "estMin": 1440,
      "logs": []
    },
    {
      "id": "B1",
      "group": "B",
      "title": "Email Marketing — Editor HTML de Campanhas",
      "desc": "Backend de email-campaigns está implementado (CRUD completo, status, segmentação). Falta: editor visual WYSIWYG para composição do corpo HTML da campanha, preview, sistema de templates de email e integração com envio real via Mailgun.",
      "responsible": [
        "reuber"
      ],
      "validator": "cristiano",
      "status": "pending",
      "priority": "medium",
      "estMin": 1440,
      "logs": []
    },
    {
      "id": "B2",
      "group": "B",
      "title": "SDR — Cadência, Playbook, Ferramentas e KPIs",
      "desc": "Duas frentes paralelas: (1) CRISTIANO — criar cadências de prospecção, elaborar o playbook do SDR, definir o momento exato de passagem de bastão para o executivo de vendas, sugerir ferramentas para otimizar resultados e definir os KPIs e KPOs de acompanhamento do SDR. (2) REUBER — analisar as ferramentas sugeridas, implementar as cadências e automações de etapas no CRM, integrar as ferramentas aprovadas e garantir o painel de acompanhamento dos KPIs definidos.",
      "responsible": [
        "cristiano",
        "reuber"
      ],
      "validator": "cristiano",
      "status": "pending",
      "priority": "low",
      "estMin": 1440,
      "logs": []
    },
    {
      "id": "B3",
      "group": "B",
      "title": "Automações — Editor Visual de Workflows",
      "desc": "CRUD de automações existe. O WorkflowEditor está incompleto — sem editor visual de nós/conexões. Implementar editor de fluxo com: triggers (evento), condições (if/else) e ações (enviar email, criar tarefa, mover deal, webhook).",
      "responsible": [
        "reuber"
      ],
      "validator": "cristiano",
      "status": "pending",
      "priority": "low",
      "estMin": 2400,
      "logs": []
    },
    {
      "id": "C1",
      "group": "C",
      "title": "Relatórios Exportáveis (PDF / Excel)",
      "desc": "Adicionar exportação em PDF e Excel nas telas de: Analytics, Comissões, Contratos e Propostas. Backend com Puppeteer já está instalado para PDF. Cristiano define quais relatórios são prioritários e o formato de cada um. Reuber implementa.",
      "responsible": [
        "reuber"
      ],
      "validator": "cristiano",
      "status": "pending",
      "priority": "medium",
      "estMin": 1440,
      "logs": []
    },
    {
      "id": "C2",
      "group": "C",
      "title": "Notificações por E-mail Configuráveis",
      "desc": "Mailgun e Nodemailer configurados no backend. Falta: painel de configuração de triggers (ex: contrato assinado, deal ganho, aprovação pendente), templates de e-mail por evento e preferências por usuário (opt-in/out).",
      "responsible": [
        "reuber"
      ],
      "validator": "cristiano",
      "status": "pending",
      "priority": "medium",
      "estMin": 960,
      "logs": []
    },
    {
      "id": "D1",
      "group": "D",
      "title": "VoIP — Integração Real com Provider",
      "desc": "VoIPPanel existe com UI completa mas transcrição usa mockTranscription (dados simulados). Integrar com provider real (Twilio, Vonage ou similar): chamadas reais, gravação, transcrição automática via STT e log de chamadas no timeline do contato.",
      "responsible": [
        "reuber"
      ],
      "validator": null,
      "status": "pending",
      "priority": "low",
      "estMin": 1920,
      "logs": []
    },
    {
      "id": "D2",
      "group": "D",
      "title": "Chat Interno — WebSocket Real",
      "desc": "ChatPanel existe com UI de conversas mas sem backend real de mensagens. Implementar: WebSocket server para mensagens em tempo real, storage de conversas no PostgreSQL, indicadores de leitura e presença online.",
      "responsible": [
        "reuber"
      ],
      "validator": null,
      "status": "pending",
      "priority": "low",
      "estMin": 1440,
      "logs": []
    },
    {
      "id": "D3",
      "group": "D",
      "title": "BTX Bridge + Worker NexusCore",
      "desc": "Dois workers estão desabilitados por variáveis de ambiente não configuradas: btx-worker (BTX_BRIDGE_INTERNAL_KEY) e outbox-worker (NEXUSCORE_INTERNAL_API_KEY). Configurar chaves, testar integração e validar fluxo de eventos com NexusCore.",
      "responsible": [
        "reuber"
      ],
      "validator": null,
      "status": "pending",
      "priority": "high",
      "estMin": 960,
      "logs": []
    },
    {
      "id": "E1",
      "group": "E",
      "title": "Testes Automatizados — Cobertura Real",
      "desc": "Existe apenas 1 arquivo de teste de exemplo. Implementar suíte de testes: unitários para funções críticas (proration.ts, expression-engine.ts), integração para endpoints principais do backend e testes E2E para fluxos críticos (login, criar contrato, assinar).",
      "responsible": [
        "reuber"
      ],
      "validator": null,
      "status": "pending",
      "priority": "medium",
      "estMin": 1920,
      "logs": []
    },
    {
      "id": "E2",
      "group": "E",
      "title": "Responsivo Mobile",
      "desc": "Interface não está otimizada para dispositivos móveis. Auditar e corrigir: Sidebar colapsável em mobile, Cards responsivos no Dashboard, Tabelas com scroll horizontal, Modais adaptáveis, e telas de Kanban do Pipeline.",
      "responsible": [
        "reuber"
      ],
      "validator": "cristiano",
      "status": "pending",
      "priority": "low",
      "estMin": 1440,
      "logs": []
    }
  ]
};
