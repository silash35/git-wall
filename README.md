# GitWall

A website showcasing the participants of the Git course at Poli-Acta'26, Escola Politécnica da UFBA.

Inspired by [GitTrainingWall](https://github.com/BrOrlandi/GitTrainingWall).

> **Note for international readers:** The course is taught in Portuguese, so the repository and its instructions are also primarily in Portuguese.

## Como adicionar seu perfil

Você participou do Curso de Git e GitHub durante a Poli-Acta'26 Edição Primavera? Então pode adicionar seu perfil à página da turma!

### 1. Copie o arquivo de exemplo

Na pasta `src/people`, você encontrará um arquivo de exemplo.

Copie esse arquivo e renomeie-o para o seu nome. Por exemplo:

```text
src/people/JoaoSilva.tsx
```

### 2. Preencha seus dados

Abra o arquivo e altere as informações do objeto `data`:

```ts
const data: PersonData = {
  name: "Seu nome",
  role: "Aluno",
  GitHub: "seu-user-do-github",
  LinkedIn: "seu-user-do-linkedin",
};
```

Preencha seu nome e seu usuário do GitHub. O LinkedIn é opcional: se você tiver um perfil e quiser adicioná-lo, informe seu usuário no campo `LinkedIn`. Caso não queira adicionar um LinkedIn, remova a linha `LinkedIn` do objeto.

Você também pode alterar o campo `role` de acordo com o que preferir. Por exemplo, você pode usar `"Aluno"`, `"Aluna"` ou outro título que faça sentido.

### 3. Personalize seu card (opcional)

Se você já conhece um pouco de desenvolvimento web, fique à vontade para personalizar o seu card.

Você pode alterar o visual, adicionar informações, adicionar animações, ou fazer outras melhorias que achar interessantes.

Não é necessário fazer isso para participar da página. Preencher os dados do exemplo já é suficiente.

### 4. Faça um commit

Depois de adicionar e testar seu perfil, faça um commit com as alterações.

Por exemplo:

```bash
git add src/people/
git commit -m "Add João Silva's card"
```

### 5. Envie um Pull Request

Por fim, envie um Pull Request para este repositório.

Eu vou revisar a alteração e, estando tudo certo, vou fazer o merge para que seu perfil apareça na página da turma.

**Obrigado por participar do curso! 🚀**

## Desenvolvimento

Se você quiser desenvolver ou fazer alterações no projeto, primeiro instale as dependências:

```bash
pnpm install
```

Depois, inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

A aplicação estará disponível localmente. A partir daí, você pode fazer alterações no código e acompanhá-las em tempo real durante o desenvolvimento.
