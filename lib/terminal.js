const terminalResponses = {
  help: {
    output: 'Available commands: help, about, skills, contact, socials, clear',
  },
  about: {
    output:
      "I'm Safiul, a software developer who turns complex business needs into clear, reliable systems.\nI build full-stack tools that solve real problems and create value.",
  },
  skills: {
    output:
      'Frontend: React, Next.js\nBackend: Node.js, Express.js, GCP\nDatabase: PostgreSQL, MySQL',
  },
  contact: { type: 'contact' },
  socials: { type: 'socials' },
}

export function getTerminalResponse(input) {
  const normalizedCommand = input.trim().toLowerCase()

  if (!normalizedCommand) return null

  if (normalizedCommand === 'clear') {
    return { clear: true }
  }

  return {
    command: input.trim(),
    ...(terminalResponses[normalizedCommand] ?? {
      output:
        "Command not found. Type 'help' for a list of available commands.",
    }),
  }
}
