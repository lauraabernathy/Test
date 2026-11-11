
import React from 'react'
import { theme } from '../theme'

interface TaskInputProps {
  value: string
  onChange: (value: string) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onAddClick: () => void
  placeholder?: string
}

export const TaskInput: React.FC<TaskInputProps> = ({
  value,
  onChange,
  onKeyDown,
  onAddClick,
  placeholder = 'Add a methodical task...'
}) => (
  <div
    className="flex w-full"
    style={{
      maxWidth: theme.spacing.inputMaxWidth,
      gap: theme.spacing.standard,
      marginBottom: theme.spacing.content
    }}
  >
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className="flex-1 outline-none focus:ring-2 placeholder:text-[var(--task-input-placeholder)] focus:ring-[var(--task-input-focus)]"
      style={{
        fontFamily: theme.typography.family,
        fontSize: theme.typography.control,
        color: theme.colors.secondaryText,
        backgroundColor: theme.colors.input,
        borderRadius: theme.radius.input,
        padding: `${theme.spacing.controlVertical}px ${theme.spacing.content}px`,
        '--task-input-placeholder': theme.colors.placeholderText,
        '--task-input-focus': theme.colors.primary
      } as React.CSSProperties}
    />
    <button
      type="button"
      onClick={onAddClick}
      className="hover:bg-[var(--task-add-hover)] transition-colors"
      style={{
        fontFamily: theme.typography.family,
        fontSize: theme.typography.control,
        fontWeight: theme.typography.weight.semibold,
        color: theme.colors.onAccent,
        backgroundColor: theme.colors.add,
        borderRadius: theme.radius.button,
        padding: `${theme.spacing.controlVertical}px ${theme.spacing.wideControl}px`,
        '--task-add-hover': theme.colors.addHover
      } as React.CSSProperties}
    >
      + Add
    </button>
  </div>
)
