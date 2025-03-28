import { ReactElement, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { DriverForm } from '@/components/DriverForm';
import { useDrivers } from '@/hooks/useDrivers';
import { DriverSchema } from '@/schemas/driver.schema';
import { PageWrapper } from '@/components/ui/PageWrapper';
import { Helmet } from 'react-helmet-async';
import { setDocumentTitle } from '@/utils/browser';

export const DriverPage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addDriver, updateDriver, getDriverById } = useDrivers();

  const handleSubmit = async (data: DriverSchema) => {
    try {
      if (id && id !== 'new') {
        await updateDriver(id, data);
      } else {
        await addDriver(data);
      }
      navigate('/drivers');
    } catch (error) {
      console.error('Error creating driver:', error);
    }
  };

  const existingDriver = getDriverById(id as string);

  const documentTitle = existingDriver
    ? `Trafegus - ${existingDriver.name}`
    : 'Trafegus - Novo Motorista';

  useEffect(() => {
    setDocumentTitle(documentTitle);
  }, []);

  if (!existingDriver && id !== 'new') {
    return <Navigate replace to="/drivers" />;
  }

  return (
    <>
      <Helmet title={documentTitle} />

      <PageWrapper>
        <DriverForm onSubmit={handleSubmit} driver={existingDriver} />
      </PageWrapper>
    </>
  );
};
