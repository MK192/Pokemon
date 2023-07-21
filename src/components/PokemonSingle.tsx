import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const PokemonSingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return <div>PokemonSingle</div>;
};
export default PokemonSingle;
