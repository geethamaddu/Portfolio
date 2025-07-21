import { ArrowUp, Smile, SmileIcon } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <footer className='py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center'>
        <p className='text-sm text-muted-foreground'>
            {new Date().getFullYear()}  Thank You!!! Stay Consistent and Happy
        </p>
       

        <a href="#profile" className='p-2 rounded-full bg-primary/10 hover:pg-primary/20 text-primary transition-colors'><ArrowUp/></a>
    </footer>
  )
}

export default Footer