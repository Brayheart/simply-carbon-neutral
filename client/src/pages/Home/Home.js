import React from 'react'
import { Container } from 'react-bootstrap'
import HomeCard from "../../components/HomeCard"
import LifeCard from '../../components/LifeCard'
import TransportationCard from '../../components/TransportationCard'
import Wrapper from "../../components/Wrapper"
import TopCards from "../../components/TopCards"

function Home({ selectionChange, stateValues }) {
    return (
        <Container>

            {console.log("Home Log:")};
            {console.log(stateValues.userState.testValue)};


            <h1 className="pt-3 mb-3" style={{ textAlign: 'center' }}>Live Carbon Neutral... <i>Simply</i></h1>

            <Wrapper>
                <TopCards />
            </Wrapper>

            <br></br>
            <h5 className="mb-5" style={{ textAlign: 'center' }}>3 Categories | 3 Questions | 1 Time per Week</h5>

            <Wrapper>
                <HomeCard
                    selectionChange={selectionChange}
                    stateValues={{ stateValues }}
                />
                <TransportationCard />
                <LifeCard />
            </Wrapper>
        </Container>
    )
}

export default Home
