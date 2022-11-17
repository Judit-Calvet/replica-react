import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Form from '../components/Form'

const Join = () => {
  return (
    <section id='join'>
      <Header />
      <main className='d-flex discover-bg flex-grow-1'>
        <Container className='d-flex flex-column justify-content-center'>
          <Row>
            <Col md={6} className='d-flex justify-content-center align-items-center'>
              <h1 className='display-1 display-md-3 fw-bold mb-5'>Join the <span>fun.</span></h1>
            </Col>
            <Col md={6}>
              <div className='bg-dark px-5 pt-5 pb-4 rounded-4'>

                <Form />
              </div>
            </Col>
          </Row>
        </Container>

      </main>
      <Footer />
      </section>
  )
}

export default Join
