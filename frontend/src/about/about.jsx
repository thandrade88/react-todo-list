import React , { Component } from 'react'
import PageHeader from '../template/pageHeader'

export default class About extends Component {

    render () {
        return (
            <div>
                <PageHeader name='Sobre' small='nós'></PageHeader>
                <h2>Nossa História</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid assumenda at delectus deserunt dicta eius laudantium magni, minima necessitatibus omnis reprehenderit tempore temporibus unde, voluptatum. Aspernatur ipsa molestias similique.
                </p>

            </div>
        )
    }

}