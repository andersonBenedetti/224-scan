export default {
  accessLogin: {
    message: 'Bem-vindo!',
    text: 'Para acessar o sistema, por favor faça o login pelo navegador',
    button: 'Fazer login',
  },
  signIn: {
    message: 'Bem-vindo!',
    text: 'Para acessar o sistema, por favor informe seu e-mail e senha.',
    email: 'E-mail',
    password: 'Senha',
    button: 'Entrar',
    passwordRecovery: 'Esqueceu a senha?',
  },
  signUp: {
    message: 'Bem-vindo!',
    text: 'Para acessar o sistema, por favor informe seu e-mail e senha.',
    name: 'Nome da Clínica',
    email: 'E-mail',
    region: 'Região',
    timezone: 'Timezone',
    password: 'Senha',
    button: 'Cadastrar',
    back: 'Voltar ao login',
  },
  passwordRecovery: {
    message: 'Esqueceu a senha?',
    text: 'Enviaremos para o seu e-mail o código de verificação para redefinir sua senha.',
    email: 'E-mail',
    button: 'Solicitar código',
  },
  verificationKey: {
    message: 'Chave de verificação',
    text: 'Por favor, informe a chave de autorização enviada para o seu e-mail',
    code: 'Código',
    button: 'Enviar',
    remand: 'Reenviar código',
  },
  resetPassword: {
    message: 'Redefinir senha',
    text: 'Por favor, informe sua nova senha e confirme.',
    password: 'Senha',
    confirmPassword: 'Confirmar Senha',
    button: 'Enviar',
  },
  header: {
    title: 'Clínica Médica Dr Roberto',
    status: 'Status Servidor',
  },
  exams: {
    title: 'Exames',
    search: {
      label: 'Filtros',
      placeholder: 'Pesquise',
    },
    table: {
      name: 'Nome do paciente',
      status: 'Envio servidor',
      infos: 'Laudo',
      users: {
        1: {
          name: 'Bianca Gonçalves da Rosa Mastella',
          cod: 'LHSMOD42019',
          status: 'Exame sendo enviado',
          info: 'Aguardando',
        },
        2: {
          name: 'Bianca Gonçalves da Rosa Mastella',
          cod: 'LHSMOD42019',
          status: 'Exame enviado!',
          info: 'Laudo finalizado!',
        },
      },
    },
  },
  logs: {
    title: 'Logs de erro',
    table: {
      name: 'Nome do DICOM',
      reason: 'Motivo',
      action: 'Ação',
      users: {
        1: {
          name: 'Bianca Gonçalves da Rosa Mastella',
          cod: 'LHSMOD42019',
          reason: 'A comunicação com o servidor falhou',
          button: 'Tentar novamente',
        },
        2: {
          name: 'Bianca Gonçalves da Rosa Mastella',
          cod: 'LHSMOD42019',
          reason: 'A comunicação com o servidor falhouExame enviado!',
          button: 'Tentar novamente',
        },
      },
    },
  },
  settings: {
    title: 'Configurações',
    menu: {
      branch: 'Branch',
      dicomServer: 'Dicom/Server',
      internet: 'Internet',
      logOut: 'Log out',
    },
    branch: {
      title: 'Configurações Branch',
      name: 'Oncologia Unidade Criciúma',
      text: 'Descrição da Branch Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      status: 'Ativa',
      language: 'Português (BR)',
      buttonEdit: 'Editar',
      inputName: 'Nome da branch',
      inputDescription: 'Nome da branch',
      buttonCancel: 'Cancelar',
      buttonSave: 'Salvar alterações',
    },
  },
};
