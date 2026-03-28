import { useState, useRef, useEffect } from 'react'
import './App.css'
import { portfolioData, commands } from './data/portfolioData'

function App() {
  const [history, setHistory] = useState([
    { type: 'output', content: '╔═══════════════════════════════════════════════════╗' },
    { type: 'output', content: '║  ███████╗ █████╗ ██╗  ██╗██╗██╗                   ║' },
    { type: 'output', content: '║  ██╔════╝██╔══██╗██║  ██║██║██║                   ║' },
    { type: 'output', content: '║  ███████╗███████║███████║██║██║                   ║' },
    { type: 'output', content: '║  ╚════██║██╔══██║██╔══██║██║██║                   ║' },
    { type: 'output', content: '║  ███████║██║  ██║██║  ██║██║███████╗              ║' },
    { type: 'output', content: '║  ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝              ║' },
    { type: 'output', content: '║                                                   ║' },
    { type: 'output', content: '║        SOFTWARE ENGINEER | FRONTEND DEVELOPER     ║' },
    { type: 'output', content: '║              [SECURE PORTFOLIO TERMINAL v1.0]     ║' },
    { type: 'output', content: '╚═══════════════════════════════════════════════════╝' },
    { type: 'output', content: '' },
    { type: 'output', content: '[+] System initialized...' },
    { type: 'output', content: '[+] Security protocols active' },
    { type: 'output', content: '[+] Terminal ready for commands' },
    { type: 'output', content: '' },
    { type: 'output', content: '💡 Type "help" to see all available commands.' },
    { type: 'output', content: '' }
  ])
  const [input, setInput] = useState('')
  const [currentPath, setCurrentPath] = useState('~')
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    return savedTheme || 'dark'
  })
  const inputRef = useRef(null)
  const terminalRef = useRef(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim()
    const parts = trimmedCmd.split(' ')
    const command = parts[0].toLowerCase()
    const args = parts.slice(1).join(' ')

    const newHistory = [...history, { type: 'input', content: `${currentPath} $ ${trimmedCmd}` }]

    switch (command) {
      case 'help':
        newHistory.push({
          type: 'output',
          content: commands.help.join('\n')
        })
        break

      case 'clear':
        setHistory([
          { type: 'output', content: '╔═══════════════════════════════════════════════════════════╗' },
          { type: 'output', content: '║              [SECURE PORTFOLIO TERMINAL v1.0]             ║' },
          { type: 'output', content: '╚═══════════════════════════════════════════════════════════╝' },
          { type: 'output', content: '' },
          { type: 'output', content: '[+] System initialized...' },
          { type: 'output', content: '[+] Security protocols active' },
          { type: 'output', content: '[+] Terminal ready for commands' },
          { type: 'output', content: '' },
          { type: 'output', content: '💡 Type "help" to see all available commands.' },
          { type: 'output', content: '' }
        ])
        return

      case 'about':
      case 'whoami':
        newHistory.push({
          type: 'output',
          content: commands.about
        })
        break

      case 'experience':
      case 'exp':
        newHistory.push({
          type: 'output',
          content: commands.experience
        })
        break

      case 'projects':
      case 'proj':
        newHistory.push({
          type: 'output',
          content: commands.projects
        })
        break

      case 'skills':
        newHistory.push({
          type: 'output',
          content: commands.skills
        })
        break

      case 'education':
      case 'edu':
        newHistory.push({
          type: 'output',
          content: commands.education
        })
        break

      case 'contact':
      case 'email':
        newHistory.push({
          type: 'output',
          content: commands.contact
        })
        break

      case 'github':
        window.open('https://github.com', '_blank')
        newHistory.push({
          type: 'output',
          content: '[+] Opening GitHub profile in new tab...\n[+] External link security check: PASSED'
        })
        break

      case 'linkedin':
        window.open('https://www.linkedin.com', '_blank')
        newHistory.push({
          type: 'output',
          content: '[+] Opening LinkedIn profile in new tab...\n[+] External link security check: PASSED'
        })
        break

      case 'resume':
        newHistory.push({
          type: 'output',
          content: commands.resume
        })
        break

      case 'theme':
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        newHistory.push({
          type: 'output',
          content: `[+] Theme switched to ${newTheme} mode`
        })
        break

      case '':
        newHistory.push({ type: 'output', content: '' })
        break

      default:
        newHistory.push({
          type: 'error',
          content: `Command not found: ${command}\nType "help" to see available commands.`
        })
    }

    setHistory(newHistory)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() !== '') {
      executeCommand(input)
      setInput('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <div className={`terminal-container ${theme}`}>
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="btn btn-close"></span>
            <span className="btn btn-minimize"></span>
            <span className="btn btn-maximize"></span>
          </div>
          <div className="terminal-title">sahil@portfolio: ~</div>
          <button className="theme-toggle" onClick={toggleTheme} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
        <div className="terminal-body" ref={terminalRef}>
          {history.map((item, index) => (
            <div key={index} className={`terminal-line ${item.type}`}>
              {item.type === 'input' ? (
                <span className="line-content">{item.content}</span>
              ) : item.type === 'error' ? (
                <span className="error-text">{item.content}</span>
              ) : (
                <pre className="line-content">{item.content}</pre>
              )}
            </div>
          ))}
          <form onSubmit={handleSubmit} className="input-form">
            <span className="prompt">{currentPath} $</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input"
              autoFocus
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
