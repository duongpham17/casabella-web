import Meta from '@components/meta';
import Home from 'routes/home';
import { api } from '@misc/api';
import { IServices } from 'types/services';

export interface PropsTypes {
  subservices: IServices[],
  services: IServices[]
};

export const getStaticProps = async () => {
  const subservices = await api.get('/services/type=subservices');
  const services = await api.get('/services/type=services');

  return {
    props: {
      subservices: subservices.data.data || [],
      services: services.data.data || []
    },
    revalidate: 60 //60 * 60 * 24 * 1  // in days
  }
};

export default function Index(props: PropsTypes) {
  return (
    <>
      <Meta title="Home" />
      <Home {...props} />
    </>
  )
}