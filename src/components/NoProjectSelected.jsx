import NoProjectImg from '../assets/no-projects.png'
import Button from './Button'

export default function NoProjectSelected({onStartAddProject}){
    return <div className="mt-24 text-center w-2/3">
        <img src={NoProjectImg} className='w-16 h-16 object-contain mx-auto' alt='Empty task list'/>
        <h2 className='text-xl text-stone-500 my-4'>No Projects Selected.</h2>
        <p className='text-stone-400 mb-4'> Select a Project or Create a new Project</p>
        <p className='mt-8'>
            <Button onClick={onStartAddProject}>Create a new Project</Button>
        </p>
    </div>
}