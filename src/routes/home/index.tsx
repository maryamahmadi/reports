import React from 'react'

export default class Home extends React.Component {
    componentDidMount () {
        let resp, result
        try {
            resp = fetch(`/api/report/create-report`, {
              method: 'POST',
              body: '1 2 3'
            })
          } catch (e) {
            result = e
          }
    }
    greeter(user: string) {
      console.log(user)
    }
    render() {
        return <div> {this.greeter('kian')} </div>
    }
}