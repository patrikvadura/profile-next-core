import * as React from 'react'
import Image from 'next/image'

interface EmailTemplateProps {
  name: string
  email: string
  message: string
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, email, message }) => (
  <div
    style={{
      backgroundColor: 'rgb(255,255,255)',
      marginTop: 'auto',
      marginBottom: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontFamily:
        'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
      paddingLeft: '0.5rem',
      paddingRight: '0.5rem',
    }}
  >
    <table
      align="center"
      width="100%"
      border={0}
      cellPadding="0"
      cellSpacing="0"
      role="presentation"
      style={{
        maxWidth: '465px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'rgb(234,234,234)',
        borderRadius: '0.25rem',
        marginTop: '40px',
        marginBottom: '40px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '20px',
      }}
    >
      <tbody>
        <tr style={{ width: '100%' }}>
          <td>
            <h1
              className=""
              style={{
                color: 'rgb(0,0,0)',
                fontSize: '24px',
                fontWeight: 400,
                textAlign: 'center',
                padding: '0px',
                marginTop: '30px',
                marginBottom: '30px',
                marginLeft: '0px',
                marginRight: '0px',
              }}
            >
              Máte novou zprávu z webu od <b>{name}</b>
            </h1>
            <p
              style={{
                fontSize: '14px',
                lineHeight: '22px',
                margin: '16px 0',
                textAlign: 'center',
                color: 'rgb(0,0,0)',
              }}
            >
              {message}
            </p>
            <table
              align="center"
              width="100%"
              border={0}
              cellPadding="0"
              cellSpacing="0"
              role="presentation"
              style={{
                textAlign: 'center',
                marginTop: '32px',
                marginBottom: '32px',
              }}
            >
              <tbody>
                <tr>
                  <td>
                    <a
                      href={`mailto:${email}`}
                      style={{
                        lineHeight: '100%',
                        textDecoration: 'none',
                        display: 'inline-block',
                        maxWidth: '100%',
                        backgroundColor: 'rgb(0,0,0)',
                        borderRadius: '0.25rem',
                        color: 'rgb(255,255,255)',
                        fontSize: '12px',
                        fontWeight: 600,
                        textDecorationLine: 'none',
                        textAlign: 'center',
                        paddingLeft: '1.25rem',
                        paddingRight: '1.25rem',
                        paddingTop: '0.75rem',
                        paddingBottom: '0.75rem',
                        padding: '12px 20px 12px 20px',
                      }}
                      target="_blank"
                    >
                      <span />
                      <span
                        style={{
                          maxWidth: '100%',
                          display: 'inline-block',
                          lineHeight: '120%',
                        }}
                      >
                        Poslat odpověď
                      </span>
                      <span />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr
              style={{
                width: '100%',
                border: 'none',
                borderTop: '1px solid #eaeaea',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgb(234,234,234)',
                marginTop: '26px',
                marginBottom: '26px',
                marginLeft: '0px',
                marginRight: '0px',
              }}
            />
            <p
              style={{
                fontSize: '12px',
                lineHeight: '20px',
                margin: '16px 0',
                textAlign: 'center',
                color: 'rgb(102,102,102)',
              }}
            >
              Powered by
              <Image
                className="translate-y-0.25"
                alt="Patrik Vaďura"
                width={65}
                height={65}
                src={`https://${process.env.VERCEL_URL}/assets/logoEmail.webp`}
                style={{
                  display: 'inline',
                  outline: 'none',
                  border: 'none',
                  textDecoration: 'none',
                  paddingLeft: '0.25rem',
                }}
              />
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)
