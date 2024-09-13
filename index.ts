import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const redirectUrl = process.env.REDIRECT_URL;

app.get('*', (req: Request, res: Response) => {
  if (redirectUrl) {
    res.redirect(redirectUrl);
  } else {
    res.status(500).send('Redirect URL not set');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}, redirecting to ${redirectUrl}`);
});
