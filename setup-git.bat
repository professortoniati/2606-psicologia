@echo off
:: Script de automação DevOps para configurar o Git e associar ao repositório remoto
:: Criado com foco em boas práticas de versionamento profissional

chcp 65001 > nul
echo =======================================================================
echo      AUTOMAÇÃO DEVOPS: CONFIGURADOR DE REPOSITÓRIO GIT
echo =======================================================================
echo.

:: 1. Verificar se o Git está instalado
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERRO] Git não encontrado! Por favor, instale o Git (https://git-scm.com)
    echo e certifique-se de que ele está adicionado ao PATH do sistema.
    echo.
    pause
    exit /b 1
)

:: 2. Inicializar repositório Git se necessário
if not exist .git (
    echo [INFO] Inicializando repositório Git local...
    git init
    echo [SUCESSO] Repositório inicializado.
) else (
    echo [INFO] Repositório Git local já existente.
)

:: 3. Definir branch principal para 'main'
git branch -M main
echo [INFO] Branch principal definida como 'main'.

:: 4. Adicionar arquivos ao controle de versão
echo [INFO] Adicionando arquivos ao index (stage)...
git add .

:: 5. Criar commit inicial
echo [INFO] Criando commit inicial...
git commit -m "initial commit: landing page profissional da Dra. Ana Beatriz Mello"

:: 6. Associar ao repositório remoto do GitHub
echo [INFO] Associando o repositório local ao GitHub...
git remote remove origin >nul 2>nul
git remote add origin https://github.com/professortoniati/2606-psicologia.git

echo.
echo =======================================================================
echo      CONFIGURAÇÃO EXECUTADA COM SUCESSO!
echo =======================================================================
echo.
echo O repositório local agora está associado a:
echo   https://github.com/professortoniati/2606-psicologia.git
echo.
echo Instruções de Envio (Push):
echo Para enviar com segurança os arquivos para o repositório remoto, execute:
echo   git push -u origin main
echo.
pause
