
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.tsx'
import QuizProvider from './component/provider/Provider.tsx'

createRoot(document.getElementById('root')!).render(

<QuizProvider>

  <App />
</QuizProvider>
 
)
