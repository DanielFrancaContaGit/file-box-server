import { app } from './app';

require('dotenv/config');

app.listen(process.env.PORT || 3001, () => {
  console.log(`READY at port ${process.env.PORT || 3001}`);
});
