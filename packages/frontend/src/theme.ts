export type Theme = {
	readonly colors: {
		readonly primary: string
		readonly page: string
		readonly card: string
		readonly input: string
		readonly mutedSurface: string
		readonly primaryText: string
		readonly secondaryText: string
		readonly mutedText: string
		readonly placeholderText: string
		readonly icon: string
		readonly onAccent: string
		readonly border: string
		readonly checkboxBorder: string
		readonly checkboxBorderCompleted: string
		readonly checkboxFillCompleted: string
		readonly add: string
		readonly addHover: string
		readonly star: string
		readonly completion: string
	}
	readonly spacing: {
		readonly unit: number
		readonly compact: number
		readonly controlVertical: number
		readonly standard: number
		readonly content: number
		readonly wideControl: number
		readonly checkboxSize: number
		readonly rowHeight: number
		readonly inputMaxWidth: number
		readonly focusRing: number
	}
	readonly radius: {
		readonly checkbox: number
		readonly iconButton: number
		readonly card: number
		readonly input: number
		readonly button: number
	}
	readonly typography: {
		readonly family: string
		readonly heading: number
		readonly body: number
		readonly control: number
		readonly label: number
		readonly weight: {
			readonly regular: number
			readonly medium: number
			readonly semibold: number
			readonly bold: number
			readonly extrabold: number
		}
	}
}

export const theme: Theme = {
	colors: {
		primary: '#007AFF',
		page: '#F2F2F7',
		card: '#FFFFFF',
		input: '#F2F2F7',
		mutedSurface: '#F2F2F7',
		primaryText: '#1C1C1E',
		secondaryText: '#3C3C43',
		mutedText: '#8E8E93',
		placeholderText: '#8E8E93',
		icon: '#8E8E93',
		onAccent: '#FFFFFF',
		border: '#D1D1D6',
		checkboxBorder: '#C7C7CC',
		checkboxBorderCompleted: '#007AFF',
		checkboxFillCompleted: '#007AFF',
		add: '#007AFF',
		addHover: '#0066D6',
		star: '#FFCC00',
		completion: '#34C759'
	},
	spacing: {
		unit: 4,
		compact: 8,
		controlVertical: 12,
		standard: 16,
		content: 24,
		wideControl: 28,
		checkboxSize: 22,
		rowHeight: 64,
		inputMaxWidth: 544,
		focusRing: 2
	},
	radius: {
		checkbox: 6,
		iconButton: 6,
		card: 16,
		input: 12,
		button: 12
	},
	typography: {
		family: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
		heading: 34,
		body: 17,
		control: 16,
		label: 14,
		weight: {
			regular: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
			extrabold: 800
		}
	}
} as const
