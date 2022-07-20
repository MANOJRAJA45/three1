import React from 'react'

import { WHOLE_DATA } from '../constants'

function WholeData() {
  return (
    <div>
      {Object.keys(WHOLE_DATA).map(filterkey=>{
        const currentFilter=WHOLE_DATA[filterkey];
        return (
          <div key={`whole-data-${currentFilter}`}>
            {currentFilter}
          </div>
        )
      })}
    </div>
  )
}

export default WholeData