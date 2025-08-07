import React from 'react'
// import ScrollStack, { ScrollStackItem } from '../../reactbits/ScrollStack/ScrollStack'
import ScrollStack from "../../reactbits/ScrollStack/ScrollStack"
import { ScrollStackItem } from '../../reactbits/ScrollStack/ScrollStack'
const Projects = () => {
  return (
    <div>
        <ScrollStack>
  <ScrollStackItem>
    <h2>Card 1</h2>
    <p>This is the first card in the stack</p>
  </ScrollStackItem>
  <ScrollStackItem>
    <h2>Card 2</h2>
    <p>This is the second card in the stack</p>
  </ScrollStackItem>
  <ScrollStackItem>
    <h2>Card 3</h2>
    <p>This is the third card in the stack</p>
  </ScrollStackItem>
</ScrollStack>
    </div>
  )
}

export default Projects