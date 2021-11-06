import {Link as RouterLink} from 'react-router-dom';
import Button from '@mui/material/Button';

const ButtonLink = ({to, ...rest}) => {
  return <Button component={RouterLink} to={to} {...rest} />;
};

export default ButtonLink;
