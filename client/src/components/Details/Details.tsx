import React from 'react'
import styled from 'styled-components'
import {BiCalendar} from "react-icons/bi"
import {AiOutlineBell} from "react-icons/ai"

const Details = () => {
  return (
    <div>
        <Container>
            <Wrapper>
<Card>
    <IconHold>
        <input type="text" />
    </IconHold>
</Card>
<Card>
					<IconHold>
						<BiCalendar />
					</IconHold>
					<span>Due</span>
				</Card>
        <Card>
					<IconHold>
						<AiOutlineBell />
					</IconHold>
					<span>Remaind Me</span>
				</Card>
            </Wrapper>
        </Container>

    </div>
  )
}

export default Details

const IconHold = styled.div``

const Card = styled.div``


const Wrapper = styled.div``

const Container = styled.div``