import React from 'react'

const SearchModal = () => {
  return (
    <>
      <div class='search-container active' data-search-box=''>
        <button class='close-button' type='button' name='button'>
          ×
        </button>
        <div class='input-wrapper'>
          <input
            type='search'
            name='search'
            aria-label='search'
            placeholder='Search here...'
            class='search-field'
          />

          <button
            class='search-submit'
            aria-label='submit search'
            data-search-toggler=''
          >
            <ion-icon
              name='search-outline'
              role='img'
              class='md hydrated'
              aria-label='search outline'
            ></ion-icon>
          </button>

          <button
            class='search-close'
            aria-label='close search'
            data-search-toggler=''
          ></button>
        </div>
      </div>
    </>
  )
}

export default SearchModal
