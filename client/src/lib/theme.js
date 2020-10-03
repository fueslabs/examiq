// https://github.com/builderbook/builderbook/
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: { main: grey[800] },
    secondary: { main: blue[700] },
    type: 'light',
  },
});

export { theme };