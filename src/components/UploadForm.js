import React, {useState} from 'react'

function UploadForm() {

  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const file_types = ['image/png', 'image/jpeg', 'image/jpg']

  const changeHandler = (e) => {
    let selected = e.target.files[0]
    if(selected && file_types.includes(selected.type)){
      setFile(selected)
      setError(null)
    } else{
      setFile(null)
      setError('Please select an image file (png or jpeg)')
    }
  }

  return (
    <form>
      <input type="file" onChange={changeHandler}/>
      <div className='output'>
        { error && <div className='error'>{ error } </div> }
        { file && <div>{ file.name }</div> }
      </div>
    </form>
  )
}

export default UploadForm