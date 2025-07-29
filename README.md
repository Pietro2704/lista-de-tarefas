# GIT
é uma ferramenta usada para versionamento de código

## Comandos:

### Configuração
```bash
git config --global user.name "Seu nome"
git config --global user.email "seu@email.com"
```

### Inicialização:
```bash
git init
```

Com isso inicializamos um repositório, ou seja, uma pasta que aceita versionamento.
Agora podemos criar branches

## Branch:
É uma ramificação do seu projeto.

### Situação atual da Branch
```bash
git status
```
### Criar Branch
```bash
git branch nome_da_branch
```
### Mudar de Branch
```bash
git switch nome_da_branch
```
### Apagar um Branch
```bash
git branch -d nome_da_branch
```
### Ver as Branches existentes
```bash
git branch
```

## Confirmar alterações feitas
```bash
git add .
git commit -m 'mensagem do que você mudou no projeto'
```

## Adicionar um repositório remoto
```bash
git remote add origin link_do_repositorio
git push -u origin main
```