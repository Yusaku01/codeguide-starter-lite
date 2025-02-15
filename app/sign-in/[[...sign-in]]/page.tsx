import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: 'bg-primary text-primary-foreground hover:bg-primary/90',
            card: 'bg-background',
            headerTitle: 'text-foreground',
            headerSubtitle: 'text-muted-foreground',
            socialButtonsBlockButton: 'bg-background text-foreground border border-input',
            formFieldLabel: 'text-foreground',
            formFieldInput: 'bg-background text-foreground border border-input',
            footerActionLink: 'text-primary hover:text-primary/90',
          },
        }}
      />
    </div>
  )
}
