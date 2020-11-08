import React, { Fragment, useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { Context } from '../Context'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  return (
    <Fragment>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(({ data }) => {
                {/* console.log(response) */ }
                const { signup } = data
                activateAuth(signup)
              })
            }

            const errorMsg = error && 'La contraseña es incorrecta o el usuario no existe'

            return <UserForm disabled={loading} error={errorMsg} title='Registrate' onSubmit={onSubmit} />
          }
        }
      </RegisterMutation>

      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(({ data }) => {
                {/* console.log(response) */ }
                const { login } = data
                activateAuth(login)
              })
            }

            const errorMsg = error && 'La contraseña es incorrecta o el usuario no existe'
            return <UserForm error={errorMsg} disabled={loading} title='Iniciar Sesión' onSubmit={onSubmit} />
          }
        }
      </LoginMutation>
    </Fragment>
  )
}