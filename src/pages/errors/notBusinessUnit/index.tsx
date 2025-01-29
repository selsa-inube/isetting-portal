import clientNotFound from "@assets/images/Expired.png";
import { ErrorPage } from "@design/layout/ErrorPage";
import { useLogoutAndClearLocalStorage } from "@hooks/useLogoutAndClearLocalStorage";

const NotBusinessUnit = () => {
  const { handleLogout } = useLogoutAndClearLocalStorage();

  return (
    <ErrorPage
      image={clientNotFound}
      imageAlt="Unidad de negocio no encontrada"
      heading="No hay resultados..."
      description="Su usuario no tiene unidades de negocio relacionados, consulte con su administrador."
      onClick={handleLogout}
    />
  );
};

export { NotBusinessUnit };
