import { useTranslation } from 'react-i18next';

const BASE_I18N_PATH = 'pages.projects';

const getLocalePath = (keyName: string) => `${BASE_I18N_PATH}.${keyName}`;

function Projects() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t(getLocalePath('title'))}</h1>
    </>
  );
}

export default Projects;
