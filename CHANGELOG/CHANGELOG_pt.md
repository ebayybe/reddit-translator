# Histórico de Alterações

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.

## [1.2.0]

### Adicionado
- Seção "Atualizações Automáticas" no painel de configurações com três modos:
  - **Verificar e abrir atualização** — verifica periodicamente a fonte de atualização confiável em segundo plano e abre a página de atualização quando uma versão mais recente é encontrada
  - **Notificar-me sobre atualizações** — verifica periodicamente e exibe apenas uma notificação
  - **Desativar verificações de atualização** — o script nunca verifica por conta própria
- Botão manual "Verificar Atualizações", exibido ao lado da versão atual do script (lida a partir dos metadados do próprio script de usuário)
- Texto explicativo esclarecendo que a atualização automática nativa do Tampermonkey/Violentmonkey é um mecanismo separado não controlado por esta configuração
- Sistema de efeitos sonoros (SFX) construído na API Web Audio nativa, sem arquivos de áudio ou bibliotecas externas:
  - Interruptor global de ativação/desativação e controle de volume principal
  - 13 categorias de som alternáveis independentemente (cliques de botão, tradução, copiar, tentar novamente, painel, abas, configurações, alternadores, cache, histórico, importação/exportação, modos, tradução automática)
  - Sons curtos distintos para diferentes ações e um botão "Testar Som"
  - Totalmente independente de qualquer funcionalidade de conversão de texto em fala (TTS)
  - Tempos de espera (cooldowns) por evento para evitar spam de som, inclusive durante a tradução automática/em lote
- Ícones de bandeira SVG reais e autônomos para cada idioma suportado nos seletores de Idioma da Interface e Idioma de Tradução, substituindo as bandeiras de emoji Unicode. Os ícones estão incorporados diretamente no script; nada é buscado pela rede para exibi-los
- Sons de clique distintos para o botão "Importar" e o botão "Testar" do DeepL

### Alterado
- A comparação de versões para verificações de atualização usa comparação numérica adequada de versões semânticas (não comparação de strings)

### Segurança
- As chaves de API do DeepL são excluídas dos arquivos de configurações exportados
- A importação de um arquivo de configurações não sobrescreve mais as chaves de API armazenadas localmente; as chaves só podem ser alteradas através do campo dedicado "Chaves de API do DeepL"
- A configuração importada é validada campo por campo antes de ser aplicada (códigos de idioma, tema, motor, intervalos numéricos, configurações de som, modo de atualização); valores inválidos ou não reconhecidos são ignorados e substituídos por padrões existentes/seguros em vez de serem aceitos
- A fonte de atualização confiável é um valor fixo no script e não é configurável através de configurações importadas
- As verificações de atualização leem apenas um número de versão do texto do script buscado; nenhum código baixado é executado em momento algum

### Corrigido
- Layout responsivo para a seção Atualizações Automáticas, para que rótulos localizados mais longos dobrem a linha em vez de transbordar o painel de configurações

## [1.0.10]

### Adicionado
- 5 novos idiomas de UI: italiano, português, coreano, vietnamita, árabe — a interface agora suporta 15 idiomas no total, com cada rótulo, botão, dica e seção (incluindo DeepL e Limites de Requisições) totalmente traduzidos
- O idioma da interface agora é detectado automaticamente a partir do idioma do navegador/sistema na primeira instalação

### Alterado
- Metadados de autor e repositório atualizados para refletir o mantenedor atual
- As seções Chaves de API do DeepL e Limites de Requisições agora estão totalmente localizadas em todos os idiomas de UI suportados (anteriormente exibidas em inglês independentemente do idioma selecionado)
- O controle deslizante de atraso de requisição agora exibe sua unidade de tempo no idioma correto (ex. `ms`, `мс`, `毫秒`)
- Os seletores de cores personalizados agora atualizam corretamente seus valores ao alternar temas

### Removido
- Tema claro (os temas Escuro, Cyberpunk e Dracula continuam disponíveis)
- Seletor de cor do texto (afetava apenas parte do texto da UI, o que era enganoso)
- Conversão de texto em fala (TTS) — removida pois não estava funcionando corretamente

### Corrigido
- O link de ajuda do DeepL anteriormente apontava para `api-free.deepl.com`; agora aponta corretamente para `deepl.com/pro-api`
- O texto do botão "Salvar Chaves do DeepL" estava truncado em 6 idiomas de UI (russo, ucraniano, alemão, francês, espanhol, turco); rótulos encurtados para caber em todos os tamanhos de tela
- Alternar temas não deixa mais cores personalizadas antigas aplicadas sobre o novo tema

[Ver lançamento](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.10)

## [1.0.9]

Contribuição de [Dylan-ZQL](https://github.com/Dylan-ZQL). Verificado comparando os arquivos fonte v1.0.0 e v1.0.9.

### Adicionado
- Motor de tradução DeepL, juntamente com os motores Google e MyMemory existentes
  - Suporte para múltiplas chaves de API do DeepL com rotação automática e alternância caso uma chave falhe
  - Detecção automática de pontos de extremidade da API Free vs. Pro
  - Textos longos são divididos em pedaços do tamanho de uma requisição antes da tradução
  - Limites de requisição configuráveis: máx. de requisições concorrentes, máx. de requisições por segundo, máx. de caracteres por requisição, máx. de parágrafos por requisição
- Tradução automática ao rolar: um `IntersectionObserver` adicional traduz automaticamente o conteúdo à medida que ele entra na janela de visualização, separado do observador de injeção preguiçosa de botões existente
- Botão de alternância "Mostrar original / Mostrar tradução", permitindo alternar a página inteira entre o texto original e o traduzido
- Prefixo de chave de armazenamento (`_x9_`) aplicado a cada configuração armazenada para evitar colisões com outros scripts de usuário
- Auxiliares básicos de escape HTML e análise segura de JSON usados em todo o código de tradução/requisição

### Alterado
- Reescrita a fila de requisições de tradução: substituiu a cadeia de atraso fixo anterior por uma fila que respeita a concorrência configurável e os limites de taxa por segundo
- Redesenhado o botão de ação flutuante: substituiu o botão rotulado "TRANSLATE ALL", a barra de progresso e o botão de cancelamento por um único botão de ícone compacto que traduz o conteúdo visível ao clicar e abre o painel de configurações ao clicar duas vezes
- A reprodução de texto em fala agora é com estado: clicar novamente em "falar" no mesmo texto interrompe a reprodução, o botão ativo é destacado visualmente e o limite anterior de truncamento de 500 caracteres foi removido

### Removido
- O atalho de teclado "Traduzir tudo" (`Ctrl+Shift+T`) e sua configuração no painel — a tradução do conteúdo visível agora é manipulada pelo botão flutuante redesenhado descrito acima

- [Ver lançamento](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.9)

## [1.0.0]

### Adicionado
- Lançamento público inicial

[Ver lançamento](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.0)
