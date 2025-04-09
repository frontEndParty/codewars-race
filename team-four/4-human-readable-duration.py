def format_duration(seconds):
    if seconds == 0:
        return "now"
    
    SECONDS_IN_YEAR = 60 * 60 * 24 * 365
    years, remaining =  divmod(seconds, SECONDS_IN_YEAR)
    days, remaining = divmod(remaining, 60 * 60 * 24)
    hours, remaining = divmod(remaining, 60 * 60)
    minutes, remaining = divmod(remaining, 60)
    seconds = remaining
    
    def pluralize(units, label):
        if not units: 
            return ''
        if units == 1: 
            return f"{units} {label}"
        return f"{units} {label}s"
    
    items = [   
        pluralize(years, "year"),
        pluralize(days, "day"),
        pluralize(hours, "hour"),
        pluralize(minutes, "minute"),
        pluralize(seconds, "second"),
        ]
    
    existing_items = [i for i in items if i]
    
    if len(existing_items) == 1:
        return existing_items[0]
    
    return f"{', '.join(existing_items[:-1])} and {existing_items[-1]}"
    
    