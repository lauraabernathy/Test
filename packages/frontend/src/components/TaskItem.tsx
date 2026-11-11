

import React from 'react'
import type { Task } from '../types/task'
import { theme } from '../theme'

interface TaskItemProps {
  task: Task
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

// Skip row renders when its task and stable event-handler props are unchanged.
export const TaskItem = React.memo(({ task, onToggle, onDelete }: TaskItemProps) => (
  <div
    className={
      'flex items-center transition-colors'
      + (task.completed
        ? ' opacity-70'
        : ' shadow-sm')
    }
    style={{
      minHeight: theme.spacing.rowHeight,
      padding: `${theme.spacing.standard}px ${theme.spacing.content}px`,
      marginBottom: theme.spacing.compact,
      borderRadius: theme.radius.card,
      backgroundColor: task.completed ? theme.colors.mutedSurface : theme.colors.card
    }}
  >
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => onToggle(task.id)}
      className={
        'border-2 transition-colors'
      }
      style={{
        width: theme.spacing.checkboxSize,
        height: theme.spacing.checkboxSize,
        minWidth: theme.spacing.checkboxSize,
        minHeight: theme.spacing.checkboxSize,
        marginRight: theme.spacing.standard,
        borderRadius: theme.radius.checkbox,
        borderColor: task.completed
          ? theme.colors.checkboxBorderCompleted
          : theme.colors.checkboxBorder,
        backgroundColor: task.completed ? theme.colors.checkboxFillCompleted : theme.colors.card,
        accentColor: task.completed ? theme.colors.checkboxFillCompleted : theme.colors.checkboxBorder,
        appearance: 'none',
        outline: 'none',
        boxShadow: task.completed
          ? `0 0 0 ${theme.spacing.focusRing}px ${theme.colors.checkboxBorderCompleted}`
          : `0 0 0 ${theme.spacing.focusRing}px ${theme.colors.checkboxBorder}`
      }}
    />
    <span
      className={
        'flex-1 transition-colors'
        + (task.completed ? ' line-through' : '')
      }
      style={{
        fontFamily: theme.typography.family,
        fontSize: theme.typography.body,
        fontWeight: theme.typography.weight.medium,
        color: task.completed ? theme.colors.mutedText : theme.colors.primaryText
      }}
    >
      {task.text}
    </span>
    {task.completed && (
      <button
        className="hover:bg-[var(--task-delete-hover)] rounded transition"
        aria-label="Delete task"
        onClick={() => onDelete(task.id)}
        type="button"
        style={{
          marginLeft: theme.spacing.standard,
          padding: theme.spacing.unit,
          borderRadius: theme.radius.iconButton,
          '--task-delete-hover': theme.colors.border
        } as React.CSSProperties}
      >
        {/* Trash icon, Figma color #B0B0B0 */}
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke={theme.colors.icon} strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    )}
  </div>
))
