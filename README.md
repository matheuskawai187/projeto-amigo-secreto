# 🎁 Amigo Secreto

Uma aplicação web moderna e intuitiva para organizar sorteios de amigo secreto de forma rápida e prática.

## 📋 Sobre o Projeto

O **Amigo Secreto** é uma ferramenta digital que permite criar listas de participantes e realizar sorteios automáticos para brincadeiras de amigo secreto. Com uma interface elegante e funcionalidades intuitivas, torna o processo de organização muito mais simples.

## ✨ Funcionalidades

- ➕ **Adicionar participantes**: Insira nomes na lista de forma rápida
- 🗑️ **Remover participantes**: Clique em qualquer nome para removê-lo da lista
- 🎲 **Sorteio automático**: Algoritmo que garante que cada pessoa tire outra diferente
- 🔄 **Embaralhamento**: Sistema de randomização para sorteios justos
- 🧹 **Reiniciar**: Limpe toda a lista e comece novamente
- ✅ **Validações inteligentes**:
  - Impede nomes duplicados
  - Não permite nomes vazios
  - Limita nomes a 20 caracteres
  - Exige mínimo de 2 participantes para sortear

## 🖥️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização moderna com:
  - Flexbox para layouts responsivos
  - Transições e animações suaves
  - Design dark com elementos neon
  - Efeitos hover interativos
- **JavaScript**: Lógica de negócio com:
  - Manipulação do DOM
  - Algoritmo de embaralhamento (Fisher-Yates)
  - Validações em tempo real
  - Gerenciamento de estado

## 🎨 Design

A interface conta com um design moderno e elegante:
- **Tema escuro** com detalhes em azul neon (`#1875e8`) e verde aqua (`#00f4bf`)
- **Tipografia** personalizada usando as fontes Chakra Petch e Inter
- **Elementos interativos** com feedback visual
- **Layout responsivo** que se adapta a diferentes telas

## 🚀 Como Usar

1. **Clone o repositório**:
   ```bash
   git clone [url-do-repositorio]
   cd amigo-secreto
   ```

2. **Abra o arquivo**:
   - Simplesmente abra o arquivo `index.html` em qualquer navegador moderno

3. **Use a aplicação**:
   - Digite um nome no campo de entrada
   - Clique em "Adicionar" para incluir na lista
   - Repita até ter todos os participantes
   - Clique em "Sortear" para ver os pares
   - Use "Reiniciar" para começar novamente

## 📁 Estrutura do Projeto

```
amigo-secreto/
├── index.html          # Página principal
├── style.css           # Estilos da aplicação
├── app.js             # Lógica JavaScript
├── assets/
│   └── imagem-presente.png  # Imagem decorativa
└── README.md          # Documentação
```

## 🔧 Funcionalidades Técnicas

### Algoritmo de Sorteio
O projeto utiliza o algoritmo Fisher-Yates para embaralhamento, garantindo distribuição uniforme e evitando que alguém tire a si mesmo.

### Validações Implementadas
- **Nome duplicado**: Verifica se o nome já existe na lista
- **Nome vazio**: Impede adicionar entradas vazias
- **Limite de caracteres**: Máximo de 20 caracteres por nome
- **Participantes mínimos**: Exige pelo menos 2 pessoas para sortear

### Interatividade
- **Remoção por clique**: Clique em qualquer nome para removê-lo
- **Feedback visual**: Animações hover e confirmações
- **Estado persistente**: Mantém a lista durante a sessão

## 🌟 Características Especiais

- **Interface intuitiva**: Design limpo e fácil de usar
- **Responsivo**: Funciona bem em desktop e mobile
- **Sem dependências**: Funciona offline, apenas com os arquivos locais
- **Acessibilidade**: Elementos semânticos e navegação por teclado
- **Performance**: Carregamento rápido e operações eficientes

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido por Matheus Kawai + Alura!

---

**Divirta-se organizando seu amigo secreto! 🎉**
