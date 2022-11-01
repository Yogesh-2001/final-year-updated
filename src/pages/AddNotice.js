import { Button, Typography } from '@material-ui/core'
import { useRef, useState } from 'react'
import JoditEditor from 'jodit-react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

const AddNotice = () => {
    const editor = useRef(null)
    const [state, setState] = useState("")
    const handleSubmit = (e) => {
        console.log(state);
        addDoc(collection(db, "notices"), {
            notice: state,
            postedAt: serverTimestamp(),
            postedBy: "Zoya Chaudhary"
        })
    }

    return (
        <>
            <section className='col-md-8 mx-auto'>
                <Typography variant='h4' className='text-center my-4'>Add placement notice</Typography>
                <JoditEditor config={{ height: 400 }} ref={editor} value={state} tabIndex={1} onBlur={newContent => setState(newContent)} onChange={newContent => { }} />
                <Button variant='contained' color='primary' className='my-3 me-3' type='submit' onClick={handleSubmit}>Add Notice</Button>
                <Button variant='contained' color='secondary' className='my-3' onClick={() => setState(" ")}>Clear</Button>
            </section>
        </>
    )
}

export default AddNotice