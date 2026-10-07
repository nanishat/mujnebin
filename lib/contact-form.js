const CONTACT_FORM_ENDPOINT = 'https://api.web3forms.com/submit'
const CONTACT_FORM_ACCESS_KEY = 'e3c6d922-0d77-43ff-8226-e1753e90d2ad'

export async function submitContactForm(formData) {
  formData.append('access_key', CONTACT_FORM_ACCESS_KEY)

  const response = await fetch(CONTACT_FORM_ENDPOINT, {
    method: 'POST',
    body: formData,
  })

  if (!response.ok) {
    throw new Error(
      `Contact form request failed with status ${response.status}`,
    )
  }

  return response.json()
}
