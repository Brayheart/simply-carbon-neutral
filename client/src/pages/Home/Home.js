import React from 'react'
import { Container } from 'react-bootstrap'
import HomeCard from "../../components/HomeCard"
import LifeCard from '../../components/LifeCard'
import TransportationCard from '../../components/TransportationCard'
import Wrapper from "../../components/Wrapper"

function Home() {
    return (
        <Container>
            <h1 className="pt-3 mb-3" style={{textAlign: 'center'}}>Live Carbon Neutral... <i>Simply</i></h1>
            <h5 className="mb-5" style={{textAlign: 'center'}}>3 Categories | 3 Questions | 1 Time per Week</h5>
            <Wrapper>
                <HomeCard />
                <TransportationCard />
                <LifeCard />
            </Wrapper>
        </Container>
    )
}

export default Home
