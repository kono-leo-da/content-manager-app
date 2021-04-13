import { useState } from 'react';

const DEFAULT_DATA = {
    title: "",
    description: "",
    link: "",
    priority: "!",
    timeToFinish: 60
}


const ResourceForm = ({onFormSubmit,initialData}) => {
    const [form, setForm] = useState(initialData || DEFAULT_DATA);

    const resetForm = () => setForm(DEFAULT_DATA);

    const handleChange = (e) => {
        const {name,value} = e.target;

        setForm({
            ...form,
            [name]: value})
    }

    const submitForm = () => {
        onFormSubmit(form);
    }

    return(
        
                <div className="resource-form"> 

                
             <h1 className='title'>Add New Resource</h1>
             <form>
             <div className="field">
             <label className="label">Title</label>
             <div className="control">
             <input className="input" name="title" type="text" placeholder="Learn Next JS and Sanity IO" value={form.title} onChange={handleChange}/>
             </div>
             </div>
             <div class="field">
             <label className="label">Description</label>
             <div className="control">
             <textarea className="textarea" name="description" placeholder="Learn these technologies because they are very popular and enable better SEO" value={form.description} onChange={handleChange}></textarea>
             </div>
             </div>
             <div className="field">
             <label className="label">Link</label>
             <div className="control">
             <input className="input" name="link" type="text" placeholder="https://www.google.com" value={form.link} onChange={handleChange}/>
             </div>
             </div>
             <div className="field">
             <label className="label">Priority</label>
             <div className="control">
             <div className="select">
             <select name="priority" value={form.priority} onChange={handleChange}>
             <option>!</option>
             <option>!!</option>
             <option>!!!</option>
             </select>
             </div>
             </div>
             </div>
             <div className="field">
             <label className="label">Time to finish</label>
             <div className="control">
             <input className="input" name="timeToFinish" type="number" placeholder="60" value={form.timeToFinish} onChange={handleChange}/>
             </div>
             <p className="help">time is in minutes</p>
             </div>
             <div className="field is-grouped">
             <div className="control">
             <button type="button" onClick={submitForm} class="button is-link">Submit</button>
             </div>
             <div className="control">
             <button type="button" onClick={resetForm} class="button is-link is-light">Reset Form</button>
             </div>
             </div>
             </form>
             </div>
               
    )
}

export default ResourceForm