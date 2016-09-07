import React from 'react';

export function titleInput(title) {
  return (
    <div className={`form-group ${title.meta.touched && title.meta.invalid ? 'text-danger' : ''}`}>
      <label> Title </label>
      <input type="text" {...title.input} className="form-control" placeholder="Title"/>
      <div className="text-helper">
        {title.meta.touched ? title.meta.error : ''}
      </div>
    </div>
  )
}

export function categoryInput(categories) {
  return (
    <div className={`form-group ${categories.meta.touched && categories.meta.invalid ? 'text-danger' : ''}`}>
      <label> Categories </label>
      <input type="text" {...categories.input} className="form-control" placeholder="Categories"/>
      <div className="text-helper">
        {categories.meta.touched ? categories.meta.error : ''}
      </div>
    </div>
  )
}

export function contentInput(content) {
  return (
    <div className={`form-group ${content.meta.touched && content.meta.invalid ? 'text-danger' : ''}`}>
      <label> Content </label>
      <textarea {...content.input} className="form-control" placeholder="Content" rows="5"/>
      <div className="text-helper">
        {content.meta.touched ? content.meta.error : ''}
      </div>
    </div>
  )
}
