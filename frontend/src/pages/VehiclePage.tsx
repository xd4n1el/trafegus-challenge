import { ReactElement, useEffect } from 'react';
import { useVehicles } from '@/hooks';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { VehicleForm } from '@/components/VehicleForm';
import { PageWrapper } from '@/components/ui/PageWrapper';
import { VehicleSchema } from '@/schemas/vehicle.schema';
import { setDocumentTitle } from '@/utils/browser';
import { Helmet } from 'react-helmet-async';

export const VehiclePage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addVehicle, updateVehicle, getVehicleById } = useVehicles();

  const handleSubmit = async (data: VehicleSchema) => {
    try {
      if (id && id !== 'new') {
        await updateVehicle(id, data);
      } else {
        await addVehicle(data);
      }
      navigate('/vehicles');
    } catch (error) {
      console.error('Error creating vehicle:', error);
    }
  };

  const existingVehicle = getVehicleById(id as string);

  const documentTitle = existingVehicle
    ? `Trafegus - ${existingVehicle.plate}`
    : 'Trafegus - Novo Veículo';

  useEffect(() => {
    setDocumentTitle(documentTitle);
  }, [documentTitle]);

  if (!existingVehicle && id !== 'new') {
    return <Navigate replace to="/vehicles" />;
  }

  return (
    <>
      <Helmet title={documentTitle} />

      <PageWrapper>
        <VehicleForm onSubmit={handleSubmit} />
      </PageWrapper>
    </>
  );
};
